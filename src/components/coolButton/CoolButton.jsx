import { Component } from "react";
import ClickableButton from "../clickableButton/ClickableButton";

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

export default class CoolButton extends Component {
  state = {
    backgroundColor: generateRandomColor(),
  };

  onClick = () => {
    this.setState({ backgroundColor: generateRandomColor() });
  };

  render() {
    return (
      <ClickableButton
        onClick={this.onClick}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        Click me!
      </ClickableButton>
    );
  }
}
