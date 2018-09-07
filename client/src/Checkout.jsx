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
      <div>
        <Share />
        <Container />
        {/* <p className={ styles.checkout }>This is the checkout!</p> */}
      </div>
    );
  }
}

export default Checkout;