import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div className="price">$257.00</div>
        <div className="is-prime">PRIME | Free One-Day</div>
        <div className="in-stock">In Stock.</div>
        <p>Ships from and sold by </p>
        <p>Amazon.com. Gift-wrap available</p>
      </div>
    )
  }
}

export default Container;