import React from 'react';
import styles from '../styles/protection.css';
import ProtectionModal from './modals/ProtectionModal.jsx';
import Loader from './modals/Loader.jsx';


class Protection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      secondsOfLoad: 0,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  showModal() {
    this.setState({
      showModal: true,
    });
    this.startTimer();
  }

  hideModal() {
    this.setState({
      showModal: false,
      secondsOfLoad: 0,
    });
  }

  startTimer() {
    setTimeout(() => {
      this.setState({
        secondsOfLoad: this.state.secondsOfLoad -(-1)
      });
    }, 1000);
  }

  render() {
    return(
      <div>
        {
          this.state.secondsOfLoad === 0
            ? (<Loader show={this.state.showModal} handleClose={this.hideModal} />)
            : (<ProtectionModal productData={this.props.productData} show={this.state.showModal} handleClose={this.hideModal}/>)
        }
        <b>Add a Protection Plan:</b>
        <div className={ styles.protection }>
          <input className={ styles.checkBox } type="checkbox"></input><span onClick={this.showModal} className={ styles.protectionPlan }>{this.props.productData.protection_plan.years}-Year Protection</span> for <span className={ styles.price }>${this.props.productData.protection_plan.price}</span>
        </div>
      </div>
    )
  }
}

export default Protection;
