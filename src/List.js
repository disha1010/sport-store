import React from 'react'
import ItemFilter from './ItemFilter'
import ItemList from './ItemList'


export default () => {
  return (
    <div className="content">
      <ItemFilter />
      <ItemList />
    </div>
  );
};
