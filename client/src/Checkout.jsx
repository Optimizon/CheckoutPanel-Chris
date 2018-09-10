import React from 'react';
import styles from './../styles/checkout.css';
import Share from './Share.jsx';
import Container from './Container.jsx';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={ styles.checkout}>
        <Share />
        <Container />
      </div>
    );
  }
}

export default Checkout;