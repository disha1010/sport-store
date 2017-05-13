import React from "react";
import Sizes from "./Sizes"
import Gender from "./Gender"
import Icon from "./Icon"

export default () => {
  return (
    <div className="filter">
      <Icon />
      <Gender />
      <Sizes />
    </div>
  );
};
