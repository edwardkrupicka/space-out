import './App.scss';
import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/api';
import logo from '../../svg/logo.svg';
import Home from '../Home/Home';

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
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Home data={ data } />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
