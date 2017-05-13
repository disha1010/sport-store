import React from "react";
import Menu from "./Menu"
import Search from "./Search"
import Logo from "./Logo"
import {Aside} from "./styled"

export default () => {
  return (
    <Aside>
      <Logo />
      <Search />
      <Menu />
    </Aside>
  );
};
