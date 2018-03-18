import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import ContentBox from './Components/ContentBox/ContentBox.jsx';
import Footer from './Components/Footer/Footer.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <ContentBox />
        <ContentBox />
        <Footer />

      </div>
    );
  }
}

export default App;
