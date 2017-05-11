import React from "react";
import Content from "./Content";
import "./style.css";

export default () => {
  return (
    <div className="content">
      <Content />
      <div className="item-buy-container">
        <button className="button-buy">buy now</button>
      </div>
    </div>
  );
};
