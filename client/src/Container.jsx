import React from 'react';
import styles from '../styles/container.css';
import classNames from 'classnames';
import Protection from './Protection.jsx';
import Quantity from './Quantity.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className={ styles.container }>
        <div className={ styles.price }>$257.00</div>
        <div className="is-prime"><img className={ classNames({[styles.iconPrime]: true, [styles.icon]: true}) }></img> | <b>FREE</b> One-Day</div>
        <div className={ styles.miniSpacing }></div>
        <div>Get FREE Delivery <b>TOMORROW</b> if you order within 6 hrs 14 mins and choose this date at checkout.<span className={ styles.details }>Details.</span></div>
        <div className={ styles.miniSpacing }></div>
        <div className={ styles.inStock }>In Stock.</div>
        <div>Ships from and sold by Amazon.com. <span>Gift-wrap available.</span></div>
        <div className={ styles.miniSpacing }></div>
        <Quantity />
        <div className={ styles.miniSpacing }></div>
        <Protection />
      </div>
    )
  }
}

export default Container;