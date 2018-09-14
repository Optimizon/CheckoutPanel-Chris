import React from 'react';
import classNames from 'classnames';
import styles from '../styles/shares.css';
import ShareModal from './modals/ShareModal.jsx';

class Share extends React.Component {
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
      <div className={ styles.share}>
        <ShareModal productData={this.props.productData} show={this.state.showModal} handleClose={this.hideModal}></ShareModal>
        <span className={ styles.click} onClick={this.showModal}>Share</span>
        <i className={ classNames({ [styles.iconMail]: true, [styles.icon]: true }) }></i>
        <i className={ classNames({ [styles.iconFacebook]: true, [styles.icon]: true }) }></i>
        <i className={ classNames({ [styles.iconTwitter]: true, [styles.icon]: true }) }></i>
        <i className={ classNames({ [styles.iconPinterest]: true, [styles.icon]: true }) }></i>
        <span>{this.props.productData.shares}K+ Shares</span>
      </div>
    )
  }
}

export default Share;