import React from 'react';
import styles from '../styles/protection.css';
import ProtectionModal from './modals/ProtectionModal.jsx';

class Protection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true,
    });
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return(
      <div>
        <ProtectionModal productData={this.props.productData} show={this.state.showModal} handleClose={this.hideModal}/>
        <b>Add a Protection Plan:</b>
        <div className={ styles.protection }>
          <input type="checkbox"></input><span onClick={this.showModal} className={ styles.protectionPlan }>{this.props.productData.protection_plan.years}-Year Protection</span> for <span className={ styles.price }>${this.props.productData.protection_plan.price}</span>
        </div>
      </div>
    )
  }
}

export default Protection;
