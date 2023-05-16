import logo from './logo.svg';
import './App.css';
import React from 'react'
import SearchBar from './composants/SearchBar'

export default function App() {
  return (
 
    <div className="App">
      {/* <FilmCardList/> */}
      <h1>API FILMS</h1>
            <SearchBar/>
      
            

      
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      {/* </header> */}
    </div>
  );
}
