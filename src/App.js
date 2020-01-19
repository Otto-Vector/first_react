import './App.scss';

import Helmet from 'react-helmet';
import React from 'react';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import Sidebar from './components/sidebar/sidebar';


const App = () => {
  return (
    <div className="App">

      <Helmet>
        <title>ABC</title>
        {/*<link rel="icon" href={logo} />*/}
      </Helmet>

      <Header />

      <Sidebar />

      <Profile />

      <Footer />

    </div>);
}

export default App;
