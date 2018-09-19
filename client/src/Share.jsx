import React from 'react';
import classNames from 'classnames';
import styles from '../styles/shares.css';
import ShareModal from './modals/ShareModal.jsx';
import Loader from './modals/Loader.jsx';

class Share extends React.Component {
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
      <div className={ styles.share}>
        { // load the loader component for one second
          this.state.secondsOfLoad === 0
            ? (<Loader show={this.state.showModal} handleClose={this.hideModal} />)
            : (<ShareModal productData={this.props.productData} show={this.state.showModal} handleClose={this.hideModal}></ShareModal>)
        }
        <span className={ styles.click} onClick={this.showModal}>Share</span>
        <i className={ styles.iconMail }></i>
        <i className={ styles.iconFacebook }></i>
        <i className={ styles.iconTwitter }></i>
        <i className={ styles.iconPinterest }></i>
        <span>{this.props.productData.shares}K+ Shares</span>
      </div>
    )
  }
}

export default Share;
