import React from 'react';
import classNames from 'classnames';
import styles from '../../styles/sharesModal.css';

const ShareModal = ({ show, handleClose, productData }) => {
  console.log(productData.image);
  const showHideClassName = show ? "display" : "displayNone"; // check if modal will be shown or not
  return(
    <div className={ classNames({ [styles.modal]: true, [styles[showHideClassName]]: true }) }>
      <section className={ styles.modalMain }>
        <header>
          <b>Share this item via Email</b>
          <button onClick={handleClose}>X</button>
        </header>
        <hr></hr>
        <div className={ styles.flex }>
          <div className={ styles.thumbnail }>
            <img src={ productData.image } />
          </div>
          <div className={ styles.shareDescription }>
            <b>{productData.name}</b>
            <div>by {productData.seller}</div>
            <div><b>Link: </b>http://{productData.link}</div>
          </div>
        </div>
        <div className={ styles.miniSpacing }></div>
        <hr></hr>
        <div className={ styles.textMain }>
          <div className={ styles.textArea }><b>To:</b><span>Import Contacts</span></div>
          <textarea placeholder="Email addresses will be stored in recently used contacts and will not be used for marketing purposes."></textarea>
        </div>
        <input type="checkbox"></input><span>Send me a copy of this Email</span>
        <div className={ styles.miniSpacing }></div>
        <div className={ styles.bottomMain }>
          <div className={ styles.iconMain } >
            <i className={ classNames({ [styles.iconFacebook]: true, [styles.icon]: true }) }></i>
            <i className={ classNames({ [styles.iconTwitter]: true, [styles.icon]: true }) }></i>
            <i className={ classNames({ [styles.iconPinterest]: true, [styles.icon]: true }) }></i>
          </div>
          <div className={ styles.buttons }>
            <input className={ styles.submitButton } type="button" value="Send e-mail"></input>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareModal;
