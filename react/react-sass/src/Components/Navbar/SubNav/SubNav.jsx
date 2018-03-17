import React, { Component } from 'react';

class SubNav extends Component {
  render() {
    return (
      <div className="SubNav">
         <ul className="ul">
          <li className="social">
            <a href="https://github.com/lupuselit"><i className="ion-social-github-outline"></i></a>
          </li>
          <li className="social">
              <a href="https://www.facebook.com/lupuselit"><i className="ion-social-facebook-outline"></i></a>
          </li>

          <li className="social">
              <a href="https://www.instagram.com/lupuselit"><i className="ion-social-instagram-outline"></i></a>
          </li>

          <li className="social">
              <a href="https://www.linkedin.com/lupuselit"><i className="ion-social-linkedin-outline"></i></a>
          </li>

          <li className="social">
              <a href="https://www.twitter.com/lupuselit"><i className="ion-social-twitter-outline icon-nav"></i></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SubNav;
