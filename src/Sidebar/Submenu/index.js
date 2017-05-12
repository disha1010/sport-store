import React from "react";
import Icon from "./Icon.js";
import "./style.css";

export default () => {
  return (
    <div className="submenu">
      <div className="submenu-title active">
        <a className="menu-item" href="#">sports</a>
        <Icon />
      </div>
      <div className="submenu-content">
        <a className="menu-item active" href="#">shoes</a>
        <a className="menu-item" href="#">clothing</a>
        <a className="menu-item" href="#">accesories</a>
      </div>
    </div>
  );
};
