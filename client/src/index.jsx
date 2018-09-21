import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout.jsx';

window.Checkout = Checkout;

ReactDOM.render(<Checkout />, document.getElementById('Checkout'));