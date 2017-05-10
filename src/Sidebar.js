import React from 'react';
import logo from './img/logo.png';
import search from './img/search.png';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <Link className="logo-img" to="/List"><img src={logo} alt="adidas-logo.png" /></Link>
      </div>
      <div className="search-field center-md">
        <img className="icon-search" src={search} alt="search-icon.png" />
        <input className="text-search" type="text" name="search" />
      </div>
      <nav className="menu">
        <div className="submenu">
          <div className="submenu-title active">
            <a className="menu-item" href="#">sports</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9">
              <g fill="#FFF" fill-rule="evenodd">
                <rect width="3" height="9" x="3" rx="1.5" transform="rotate(-45 4.5 4.5)" />
                <rect width="3" height="9" x="8" rx="1.5" transform="rotate(47 9.5 4.5)" />
              </g>
            </svg>
          </div>
          <div className="submenu-content">
            <a className="menu-item active" href="#">shoes</a>
            <a className="menu-item" href="#">clothing</a>
            <a className="menu-item" href="#">accesories</a>
          </div>
        </div>
        <a className="menu-item" href="#">brands</a>
        <a className="menu-item" href="#">micoach</a>
      </nav>
    </aside>
  );
};
 