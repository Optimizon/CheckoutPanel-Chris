import React from 'react';
import styles from '../styles/protection.css';

class Protection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <b>Add a Protection Plan:</b>
        <div className={ styles.protection }>
          <input type="checkbox"></input><span>4-Year Protection</span> for <span>$1.04</span>
        </div>
        
      </div>
    )
  }
}

export default Protection;
