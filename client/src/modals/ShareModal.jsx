import React from 'react';
import classNames from 'classnames';
import styles from '../../styles/sharesModal.css';

const ShareModal = ({ show, handleClose }) => {
  const showHideClassName = show ? "display" : "displayNone"; // check if modal will be shown or not
  return(
    <div className={ classNames({ [styles.modal]: true, [styles[showHideClassName]]: true }) }>
      <section className={ styles.modalMain }>
        <header className={ styles.header }>
          <h4>Share this item via Email</h4>
          <button onClick={handleClose}>X</button>
        </header>
        <hr></hr>
        <div>
          <div className={ styles.thumbnail }>
            <img src="asdf"></img>
          </div>
          <div className={ styles.shareDescription }>
            <div>Product Name, <span>Protection plan name</span></div>
            <div>by seller</div>
            <div><b>Link: </b>http://a.co/d/1vNIDtl</div>
          </div>
        </div>
        <hr></hr>
        <div className={ styles.textMain }>
          <div className={ styles.textArea }><b>To:</b><span>Import Contacts</span></div>
          <textarea placeholder="Email addresses will be stored in recently used contacts and will not be used for marketing purposes."></textarea>
        </div>
        <input type="checkbox"></input><span>Send me a copy of this Email</span>
        <div className={ styles.miniSpacing }></div>
        <div className={ styles.iconMain } >
          <i className={ classNames({ [styles.iconFacebook]: true, [styles.icon]: true }) }></i>
          <i className={ classNames({ [styles.iconTwitter]: true, [styles.icon]: true }) }></i>
          <i className={ classNames({ [styles.iconPinterest]: true, [styles.icon]: true }) }></i>
        </div>
      </section>
    </div>
  );
};

export default ShareModal;
