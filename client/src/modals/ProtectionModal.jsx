import React from 'react';
import classNames from 'classnames';
import styles from '../../styles/protectionModal.css';

const ProtectionModal = ({ show, handleClose, productData }) => {
  const showHideClassName = show ? "display" : "displayNone"; // check if modal will be shown or not
  return(
    <div className={ classNames({ [styles.modal]: true, [styles[showHideClassName]]: true }) }>
      <section className={ styles.modalMain }>
        <header>
          <b>Add to your order</b>
          <button onClick={handleClose}>X</button>
        </header>
        <hr></hr>
        <div className={ styles.body }>
          <div className={ styles.protectionInfo }>
            <h3>Protection Plan Name</h3>
            <h5>from <span>plan provider</span></h5>
            <div>
              <p>Description 1</p>
              <p>Description 2</p>
            </div>
          </div>
          <div className={ styles.buttons }>
            <div>
              <input className={ styles.addButton } type="button" value="Add"></input>
              <input className={ styles.noThanksButton } type="button" value="No thanks"></input>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProtectionModal;
