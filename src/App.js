import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { fetchAllData } from './services/api/api';
import './App.scss';
import Nav from './parts/Nav/Nav';
import Loading from './services/Loading/Loading';
import Home from '../components/pages/Home/Home';

const App = () => {
  const [data, setData] = useState({ articles: [], blogs: [], reports: [] });
  const [loading, setLoading] = useState(true)

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
