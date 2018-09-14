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
            <h2>{productData.protection_plan.name}</h2>
            <p>from <span>{productData.protection_plan.provider}</span></p>
            <div className="stars">
              <img src={`./images/${productData.protection_plan.rating}-star.png`} />
              <span>(63)</span>
            </div>
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
