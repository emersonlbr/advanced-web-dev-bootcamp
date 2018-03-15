import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
  render() {
    // imline styles in React isnt a bad thing
    return (
      // use className cause class is a reserved word in JS
      <div className="card" >
        <h2 className="title">Random Picture</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOX1lPLdrj4CNBQJNvMBNiSVDNnoYk59v0vzu-MomJHqJXrGmH"
             alt="Random Picture" />
        <h5 style={{fontSize: '2em' , margin: '2px'}}>Hobbies</h5>

        <HobbyList />
        </div>
    );
  }
}

export default Pet;