import React from 'react';
import clazz from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className = {clazz.sidebar}>
      <div>
        <a className = {clazz.item}  href = "#f" > Profile </a>
      </div>
      <div>
        <a className = {`${clazz.item} ${clazz.active}`} href = "#f" > Messages </a>
      </div>
      <div>
        <a className = {clazz.item} href = "#f" > News </a>
      </div>
      <div>
        <a className = {clazz.item} href = "#f" > Music </a>
      </div>
      <div>
        <a className = {clazz.item} href = "#f" > Settings </a>
      </div>
    </nav>
  )
}
export default Sidebar;