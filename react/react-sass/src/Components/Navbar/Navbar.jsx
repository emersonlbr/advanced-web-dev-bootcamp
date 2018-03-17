import React, { Component } from 'react';
import MainNav from './MainNav/MainNav.jsx';
import SubNav from './SubNav/SubNav.jsx';


class Navbar extends Component {
  render() {
    return (
      <div>

        <MainNav />
        <SubNav />

      </div>
    );
  }
}

export default Navbar;
