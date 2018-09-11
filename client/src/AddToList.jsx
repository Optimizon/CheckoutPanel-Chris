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
    return (
      <div className={ styles.dropDown }>
        <div className={ styles.addToList }>
          <input className={ styles.addButton } type="button" value="Add to List"></input>
          <input onClick={this.showMenu} className={ styles.arrowButton } type="button" value="^"></input>
        </div>
        {
          this.state.showMenu
            ? (
              <div className={ styles.dropDownContent }>
                <li>Here is Item 1</li>
                <li>Here is Item 2</li>
                <li>Here is Item 3</li>
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
