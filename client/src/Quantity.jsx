import React from 'react';

const Quantity = ({ productData }) => {
  // dynamically render number of quantity based on quantity max property
  const quantity = productData.quantity_max;
  const optionArr = [];
  for (let i = 1; i <= quantity; i++) {
    optionArr.push(<option value={`${i}`}>{i}</option>);
  }
  return (
    <div>
      <span>Qty: </span>
      <select>
        {optionArr}
      </select>
    </div>
  );
};

export default Quantity;
