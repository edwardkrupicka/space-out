import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchAllData } from './services/api/api';
import './App.scss';
import Nav from './parts/Nav/Nav';
import Loading from './services/Loading/Loading';
import Home from './views/Home/Home';
import Favorites from './views/Favorites/Favorites';
import Subscriptions from './views/Subscriptions/Subscriptions';

const App = () => {
  const [data, setData] = useState({ articles: {}, blogs: {}, reports: {} })
  const [favorites, setFavorites] = useState({ articles: {}, blogs: {}, reports: {} })
  const [subscriptions, setSubscriptions] = useState({})
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchAllData(setData, setLoading)
  }, [])

  const handleFavClick = ( cardState ) => {
    let cardId = cardState.id
    let cardType = cardState.type
    cardState.favorited = !cardState.favorited

    setData(data => ({
      ...data, 
      [cardType]: {
        ...data[cardType], 
        [cardId]: {
          ...data[cardType][cardId], 
          favorited: cardState.favorited
        }
      }
    }))

    if(cardState.favorited) {
      Object.assign(favorites[cardState.type], { [cardState.id]: cardState })
    } else {
      delete favorites[cardState.type][cardState.id]
    }
  }

  const handleSubClick = ( cardState ) => {
    let cardNewsSite = cardState.newsSite
    if(!subscriptions[cardNewsSite]) {
      setSubscriptions(subscriptions => ({
        ...subscriptions, [cardNewsSite]: cardNewsSite
      }))
    } else {
        setSubscriptions(subscriptions => {
          const prevState = {...subscriptions}
          delete prevState[cardNewsSite]
          return prevState
        })
      }
  }

  return (
    <div className="App">
      <Nav />
        { loading ? <Loading /> : null }
        <Routes>
          <Route path='/' element={ <Home data={ data } handleSubClick={handleSubClick} handleFavClick={handleFavClick} /> } />
          <Route path='/favorites' element={ <Favorites favorites={ favorites } handleSubClick={handleSubClick} handleFavClick={handleFavClick} /> } />
          <Route path='/subscriptions' element={ <Subscriptions data={ data } subscriptions={ subscriptions } handleSubClick={handleSubClick} handleFavClick={handleFavClick} /> } />
        </Routes>
    </div>
  );
};

export default App;