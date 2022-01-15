import './App.scss';
import React, { useEffect } from 'react';
import logo from '../../svg/logo.svg';

const App = () => {

  useEffect(() => {
  fetchData('https://api.spaceflightnewsapi.net/v3/articles')
  }, [])

  const fetchData = async ( api ) => {
    try {
      const res = await fetch( api )
      const resJson = await res.json()
      console.log(resJson)
    } catch(err) {
      console.log(err.stack)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
