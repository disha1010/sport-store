import React from "react";
import Menu from "./Menu"
import Search from "./Search"
import Logo from "./Logo"
import "./style.css";

export default () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Search />
      <Menu />
    </aside>
  );
};
