import React from 'react';
import classNames from 'classnames';
import styles from '../styles/sharesModal.css';

const ShareModal = ({ show }) => {
  const showHideClassName = show ? "display" : "displayNone";
  return(
    <div className={ classNames({ [styles.modal]: true, [styles[showHideClassName]]: true }) }>
      <section className={ styles.modalMain }>
        This is the Modal!
      </section>
    </div>
  );
};

export default ShareModal;
