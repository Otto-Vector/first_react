import React from 'react';
import logo from './img/cube.png';
import Helmet from 'react-helmet';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <Helmet>
      <title>ABC</title>
      <link rel="icon" href={logo} />
    </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Edit <code>src/App.js</code> and save to reload.
        </h2>
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
