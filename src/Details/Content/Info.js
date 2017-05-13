import React from 'react';
import LableOnSale from '../../LableOnSale';

export default () => (
  <div className="item-properties">
    <h1 className="item-title">ultra boost</h1>
    <div className="item-colors-container">
      <button className="button-color gray" />
      <button className="button-color blue" />
      <button className="button-color dark-gray" />
      <button className="button-color light-gray" />
    </div>
    <LableOnSale />
    <h2 className="item-price">190$</h2>
    <div className="item-save-container">
      <button className="button-save">save</button>
    </div>
  </div>
  );
