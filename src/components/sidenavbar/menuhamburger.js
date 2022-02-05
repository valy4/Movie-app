import React from "react";
import "./menuhamburger.css";

class MenuHamburger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="toggle-button"
        onClick={() => this.props.sideBarToggle()}
      >
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    );
  }
}

export default MenuHamburger;
