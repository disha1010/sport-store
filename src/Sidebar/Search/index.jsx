import React from 'react';
import './style.css';

const search = require('../../image/search.png');

export default () => (
  <div className="search-field center-md">
    <img className="icon-search" src={search} alt="search-icon" />
    <input className="text-search" type="text" name="search" />
  </div>
  );
