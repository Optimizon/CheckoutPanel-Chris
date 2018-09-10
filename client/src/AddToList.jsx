import React from 'react';
import styles from '../styles/addToList.css';

const AddToList = (props) => {
  return(
    <div className={ styles.addToList }>
      <input type="button" value="Add to List"></input>
    </div>
  );
};

export default AddToList;
