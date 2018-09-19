import React from 'react';
import classNames from 'classnames';
import styles from '../../styles/loader.css';

const Loader = ({ show, handleClose }) => {

  const showHideClassName = show ? 'display' : 'displayNone';
  const styleLoading = {
    width: '50%',
    height: 'auto',
    position: 'center',
  }
  return (
    <div className={ classNames({ [styles.modal]: true, [styles[showHideClassName]]: true }) }>
      <section className={ styles.modalMain }>
        <header>
          <b></b>
          <button onClick={handleClose}>X</button>
        </header>
        <hr/>
        <div>
          <img style={ styleLoading } src="https://s3-us-west-1.amazonaws.com/mattminwoolee-checkout/images/loadingGif.gif" />
        </div>
      </section>
    </div>
  );
};

export default Loader;
