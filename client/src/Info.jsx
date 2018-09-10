import React from 'react';
import classNames from 'classnames';
import styles from '../styles/info.css';

const Info = (props) => {
  return (
    <div>
      <div className={ styles.price }>$257.00</div>
      <div className={ styles.miniSpacing }></div>
      <div className="is-prime"><img className={ classNames({[styles.iconPrime]: true, [styles.icon]: true}) }></img> | <b>FREE</b> One-Day</div>
      <div className={ styles.miniSpacing }></div>
      <div>Get FREE Delivery <b>TOMORROW</b> if you order within 6 hrs 14 mins and choose this date at checkout.<span className={ styles.details }>Details.</span></div>
      <div className={ styles.miniSpacing }></div>
      <div className={ styles.inStock }>In Stock.</div>
      <div>Ships from and sold by Amazon.com. <span>Gift-wrap available.</span></div>
    </div>
  );
};

export default Info;
