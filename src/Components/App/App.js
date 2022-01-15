import './App.scss';
import React, { useState, useEffect } from 'react';
import logo from '../../svg/logo.svg';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
  fetchData( 'https://api.spaceflightnewsapi.net/v3/articles', setArticles )
  fetchData( 'https://api.spaceflightnewsapi.net/v3/blogs', setBlogs )
  fetchData( 'https://api.spaceflightnewsapi.net/v3/reports', setReports )
  }, [])

  const fetchData = async ( api, setState ) => {
    try {
      const res = await fetch( api )
      const resJson = await res.json()
      setState( resJson )
    } 
    catch( err ) {
      console.log( err )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
}

export default App;
