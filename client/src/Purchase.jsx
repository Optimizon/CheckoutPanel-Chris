import React from 'react';
import styles from '../styles/purchase.css';

const Purchase = () => {
  const styleButton = {
    height: '100%',
    width: 'auto',
    float: 'left',
  };

  return (
    <div className={ styles.purchase }>
      <button className={ styles.addToCart } type="button"><img style={ styleButton } src="./images/shopping-cart.png"/>Add to Cart</button>
      <div className={ styles.miniSpacing }></div>
      <div>------ or 1-Click Checkout ------</div>
      <div className={ styles.miniSpacing }></div>
      <button className={ styles.oneClick } type="button"><img style={ styleButton } src="./images/one-click.png"/>Buy now with 1-Click</button>
    </div>
  );
};

export default Purchase;
