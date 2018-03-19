import React, { Component } from 'react';
import ClickExample from './ClickExample.jsx';
import Forms from './Forms.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <ClickExample />
        <Forms />

      </div>
    );
  }
}

export default App;
