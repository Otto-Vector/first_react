import React from 'react';
import logo from '../../img/cube.png';

const Header = () => {
  return (
    <header className = "header">
    <img src = {logo} alt="logo"/>
    <h3> some header text </h3>
    </header>
  )
}
export default Header;