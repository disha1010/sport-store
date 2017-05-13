import React from "react";
import Title from "./Title.js";
import "./style.css";

export default () => {
  return (
    <div className="submenu">
      <Title />
      <div className="submenu-content">
        <a className="menu-item active" href="#">shoes</a>
        <a className="menu-item" href="#">clothing</a>
        <a className="menu-item" href="#">accesories</a>
      </div>
    </div>
  );
};
