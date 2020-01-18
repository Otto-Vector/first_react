import './App.css';

import Helmet from 'react-helmet';
import React from 'react';

import Header from './components/header/header';
import Technologies from './components/technologies/technologies';
import logo from './img/cube.png';


const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>ABC</title>
        <link rel="icon" href={logo} />
      </Helmet>

      <Header />

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

      <Technologies />

    </div>
  )
}

export default App;
