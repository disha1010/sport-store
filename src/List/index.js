import React from "react";
import Filter from "./Filter";
import List from "./List";
import "./style.css";

export default () => {
  return (
    <div className="content">
      <Filter />
      <List />
    </div>
  );
};
