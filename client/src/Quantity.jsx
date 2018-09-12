import React from 'react';

const Quantity = (props) => {
  return (
    <div>
      <span>Qty: </span>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

export default Quantity;
