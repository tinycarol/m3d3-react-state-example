import React from "react";
import ClickableButton from "../clickableButton/ClickableButton";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.plusOne = this.plusOne.bind(this);
  }

  plusOne() {
    this.setState((previous) => ({ count: previous.count + 1 }));
  }

  render() {
    return (
      <ClickableButton onClick={this.plusOne}>
        {this.state.count}
      </ClickableButton>
    );
  }
}
