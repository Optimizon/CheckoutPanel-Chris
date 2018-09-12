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
        <ProtectionModal show={this.state.showModal} handleClose={this.hideModal}/>
        <b>Add a Protection Plan:</b>
        <div className={ styles.protection }>
          <input type="checkbox"></input><span onClick={this.showModal} className={ styles.protectionPlan }>4-Year Protection</span> for <span className={ styles.price }>$1.04</span>
        </div>
      </div>
    )
  }
}

export default Protection;
