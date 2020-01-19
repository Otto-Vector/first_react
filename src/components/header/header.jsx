import React from 'react';
import logo from '../../img/cube.png';
import clazz from './header.module.scss'

const Header = () => {
  return (
    <header className = {clazz.header}>
    <img src = {logo} alt="logo"/>
    <h3> some header text </h3>
    </header>
  )
}
export default Header;