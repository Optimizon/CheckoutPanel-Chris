import React from 'react';
import styles from '../styles/purchase.css';

const Purchase = () => {
  return (
    <div className={ styles.purchase }>
      <input className={ styles.addToCart } type="button" value="Add to Cart"></input>
      <div className={ styles.miniSpacing }></div>
      <div>------ or 1-Click Checkout ------</div>
      <div className={ styles.miniSpacing }></div>
      <input className={ styles.oneClick } type="button" value="Buy now with 1-Click"></input>
    </div>
  );
};

export default Purchase;
