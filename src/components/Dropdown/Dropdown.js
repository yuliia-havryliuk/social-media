import React, { Component } from 'react';
import './Dropdown.css';
class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  /*  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };*/
  render() {
    return (
      <div className="Dropdown">
        <div className="Dropdown__btns">
          <button
            type="button"
            className="Dropdown__toggle"
            onClick={this.toggle}
          >
            {this.state.visible ? 'Hide' : 'Show'}
          </button>
          {/*         <button
            type="button"
            className="Dropdown__toggle"
            onClick={this.hide}
          >
            Hide
          </button>*/}
        </div>
        {this.state.visible && (
          <ul className="Dropdown__menu">
            <li>About us</li>
            <li>Contacts</li>
            <li>Help</li>
          </ul>
        )}
      </div>
    );
  }
}
export default Dropdown;
