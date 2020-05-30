import React from 'react';
import logo from '../assets/dti.png';

export default () => (
  <div className="navbar">
    <img src={logo} alt="DTI Logo" id="logo" />
    <div id="links">
      <a href="/">Contact Us</a>
      <a href="/">Meet the Team</a>
      <a href="/">About DTI</a>
    </div>
  </div>
);
