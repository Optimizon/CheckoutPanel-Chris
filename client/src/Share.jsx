import React from 'react';
import classNames from 'classnames';
import styles from '../styles/shares.css';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
    }
  }

  render() {
    return(
      <div className={ styles.share}>
        <span>Share</span>
        <i className={ classNames({[styles.iconMail]: true, [styles.icon]: true}) }></i>
        <i className={ classNames({[styles.iconFacebook]: true, [styles.icon]: true}) }></i>
        <i className={ classNames({[styles.iconTwitter]: true, [styles.icon]: true}) }></i>
        <i className={ classNames({[styles.iconPinterest]: true, [styles.icon]: true}) }></i>
        <span>33K+ Shares</span>
      </div>
    )
  }
}

export default Share;