import React, { Component } from 'react';
import './App.css';

class ClickExample extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'tim'};
    this.handleClick = this.handleClick.bind(this);
  }

  // you can do this or add an inline function right on click
  handleClick() {
    this.setState((prevState) => ({
      name: prevState.name.toUpperCase()
    }));
  }

  render() {

    return (
      <div>

        <p>{this.state.name}</p>
        <button type="button"
        // dont add () or the function will be invoqued immediatly
        onClick={this.handleClick}>
        UPPERCASE
        </button>

      </div>
    );
  }
}

export default ClickExample;
