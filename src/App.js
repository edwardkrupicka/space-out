import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { fetchAllData } from './services/api/api';
import './App.scss';
import Nav from './parts/Nav/Nav';
import Loading from './services/Loading/Loading';
import Home from './views/Home/Home';
import Favorites from './views/Favorites/Favorites';

const App = () => {
  const [data, setData] = useState({ articles: {}, blogs: {}, reports: {} })
  const [favorites, setFavorites] = useState({ articles: {}, blogs: {}, reports: {} })
  const [loading, setLoading] = useState(true)

  console.log(favorites)

  useEffect(() => {
    fetchAllData(setData, setLoading)
  }, []);

  return (
    <div className="App">
      <Nav />
        { loading ? <Loading /> : null }
        <Routes>
          <Route path='/' element={ <Home data={ data } setData={ setData } favorites={favorites} setFavorites={setFavorites} /> } />
          <Route path='/favorites' element={ <Favorites favorites={ favorites } setData={ setData } setFavorites={setFavorites} /> } />
        </Routes>
    </div>
  );
};

export default App;