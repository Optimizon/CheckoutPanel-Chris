import React from 'react';
import styles from '../styles/addToList.css';

const star_img = 'data:image/jpeg;base64,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';

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
      background: 'url(./images/croppedListArrow.png)',
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
                  <span><img className={ styles.listIcon } src={star_img} /><span><div>My Wish List</div><div style={{ fontSize: '2vmin' }}>public</div></span></span>
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
