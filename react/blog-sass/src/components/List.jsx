import React, { Component } from 'react';
import './List.css';


class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Food</li>
          <li>Dogs</li>
          <li>College</li>
        </ul>
      </div>
    );
  }
}

export default List;