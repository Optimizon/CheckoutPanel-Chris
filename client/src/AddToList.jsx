import React from 'react';
import styles from '../styles/addToList.css';

class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const styleArrowButton = {
      background: 'url(https://s3-us-west-1.amazonaws.com/mattminwoolee-checkout/images/croppedListArrow.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50% 50%',
    };

    return (
      <div className={ styles.dropDown }>
        <div className={ styles.addToList }>
          <input className={ styles.addButton } type="button" value="Add to List"></input>
          <input onClick={this.showMenu} className={ styles.arrowButton } type="button" style={ styleArrowButton }></input>
        </div>
        {
          this.state.showMenu
            ? (
              <div className={ styles.dropDownContent }>
                <li>
                  <span><img className={ styles.listIcon } src="https://s3-us-west-1.amazonaws.com/mattminwoolee-checkout/images/favorites-star.png" /><span><div>My Wish List</div><div style={{ fontSize: '2vmin' }}>public</div></span></span>
                </li>
                <li>Save for later</li>
                <li>Clothing & Jewelry</li>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default AddToList;
