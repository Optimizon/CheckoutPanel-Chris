import React from 'react';
import styles from '../styles/container.css';
import Protection from './Protection.jsx';
import Quantity from './Quantity.jsx';
import Purchase from './Purchase.jsx';
import Info from './Info.jsx';
import AddToList from './AddToList.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className={ styles.container }>
        <Info productData={this.props.productData}/>
        <div className={ styles.mediumSpacing }></div>
        <Quantity productData={this.props.productData}/>
        <div className={ styles.mediumSpacing }></div>
        <Protection />
        <div className={ styles.miniSpacing }></div>
        <Purchase />
        <div className={ styles.miniSpacing }></div>
        <hr></hr>
        <div>Deliver to..</div>
        <hr></hr>
        <AddToList />
      </div>
    );
  }
}

export default Container;
