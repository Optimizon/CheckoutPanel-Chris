import React from 'react';
import styles from './../styles/checkout.css';
import Share from './Share.jsx';
import Container from './Container.jsx';
import exampleData from '../exampleData.js';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: exampleData.data,
      productID: 10,
    };
  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:3000/checkout/${this.state.productID}`,
      method: 'GET',
      success: (data) => {
        // this.setState({
        //   productData: data,
        // });
      },
    });
  }

  render() {
    return (
      <div className={ styles.checkout}>
        <Share productData={this.state.productData}/>
        <Container productData={this.state.productData}/>
      </div>
    );
  }
}

export default Checkout;
