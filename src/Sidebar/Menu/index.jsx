import React from 'react';
import Submenu from './Submenu';
import './style.css';

export default () => (
  <nav className="menu">
    <Submenu />
    <a className="menu-item" href="#">brands</a>
    <a className="menu-item" href="#">micoach</a>
  </nav>
  );
