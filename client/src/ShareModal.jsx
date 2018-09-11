import React from 'react';
import classNames from 'classnames';
import styles from '../styles/sharesModal.css';

const ShareModal = ({ show, handleClose }) => {
  const showHideClassName = show ? "display" : "displayNone";
  return(
    <div className={ classNames({ [styles.modal]: true, [styles[showHideClassName]]: true }) }>
      <section className={ styles.modalMain }>
        <header className={ styles.header }>
          <h4>Share this item via Email</h4>
          <button onClick={handleClose}>X</button>
        </header>
        <div className={ styles.protectionPlanInfo }>
          <div className={ styles.thumbnail }>
            <img src="asdf"></img>
          </div>
          <div className="protectionPlanDescription">
            <div>Product Name, <span>Protection plan name</span></div>
            <div>by seller of protection plan</div>
            <div><b>Link: </b>http://a.co/d/1vNIDtl</div>
          </div>
        </div>
        <hr></hr>
        <div>
          <div><b>To:</b><span>Import Contacts</span></div>
          <input type="text"></input>
        </div>
      </section>
    </div>
  );
};

export default ShareModal;
