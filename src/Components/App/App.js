import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { fetchAllData } from '../api/api';
import './App.scss';
import Nav from '../Nav/Nav';
import Loading from '../Loading/Loading';
import Home from '../Home/Home';

const App = () => {
  const [loading, setLoading] = useState(true)
  
  const [data, setData] = useState({
    articles: [],
    blogs: [],
    reports: []
  });

  useEffect(() => {
    fetchAllData(setData, setLoading)
  }, []);

  return (
    <div className="App">
      <Nav />
        { loading ? <Loading /> : null }
        <Routes>
          <Route path='/' element={ <Home data={ data } /> } />
        </Routes>
    </div>
  );
};

export default App;
