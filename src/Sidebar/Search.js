import React from "react";
import "./style.css";
const search = require(`../image/search.png`);

export default () => {
  return (
      <div className="search-field center-md">
        <img className="icon-search" src={search} alt="search-icon.png" />
        <input className="text-search" type="text" name="search" />
      </div>
  );
};
