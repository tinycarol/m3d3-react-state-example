import React from "react";
import "./ClickableButton.css";

export default class ClickableButton extends React.Component {
  state = {
    clicked: false,
  };

  onClick = (e) => {
    this.setState({ clicked: true });
    this.props.onClick?.(e);
  };

  unClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    let className = "ClickableButton";
    if (this.state.clicked) {
      className += " clicked";
    }
    return (
      <button
        className={className}
        onClick={this.onClick}
        onTransitionEnd={this.unClick}
        style={this.props.style}
      >
        {this.props.children}
      </button>
    );
  }
}
