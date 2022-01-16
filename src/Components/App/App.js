import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { fetchData } from '../api/api';
import './App.scss';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
  fetchData( 'https://api.spaceflightnewsapi.net/v3/articles', setArticles )
  fetchData( 'https://api.spaceflightnewsapi.net/v3/blogs', setBlogs )
  fetchData( 'https://api.spaceflightnewsapi.net/v3/reports', setReports )
  }, []);

  let data = {
    articles: articles,
    blogs: blogs,
    reports: reports
  }

  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/' element={ <Home data={ data } /> } />
        </Routes>
    </div>
  );
};

export default App;
