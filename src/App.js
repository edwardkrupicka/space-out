import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchAllData } from './services/api/api';
import './App.scss';
import Nav from './parts/Nav/Nav';
import Loading from './services/Loading/Loading';
import Home from './views/Home/Home';
import Favorites from './views/Favorites/Favorites';
import Subscriptions from './views/Subscriptions/Subscriptions';
import Error from './services/Error/Error';

const App = () => {
  const [data, setData] = useState({ articles: {}, blogs: {}, reports: {} })
  const [favorites, setFavorites] = useState({ articles: {}, blogs: {}, reports: {} })
  const [subscriptions, setSubscriptions] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])

  
  useEffect(() => {
    fetchAllData(setData, setLoading, setError)
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
    <div className={error.length ? 'App error' : 'App'}>
      <Nav />
      { error.length ? <Error error={error} data={data} /> : null}
        { loading ? <Loading /> : null}
        <Routes>
          <Route path='/' element={ <Home data={data} handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions}/> } />
          <Route path='/favorites' element={ <Favorites favorites={favorites} handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions}/> } />
          <Route path='/subscriptions/*' element={ <Subscriptions data={data} subscriptions={subscriptions} handleSubClick={handleSubClick} handleFavClick={handleFavClick} subscriptions={subscriptions}/> }/>
        </Routes>
    </div>
  );
};

export default App;