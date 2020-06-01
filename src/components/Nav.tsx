import React from 'react';
import logo from '../assets/dti.png';

export default () => (
  <div className="navbar">
    <a href="/"><img src={logo} alt="DTI Logo" id="logo" /></a>
    <div id="links">
      <a href="/">Contact Us</a>
      <a href="/">Meet the Team</a>
      <a href="/">Home</a>
    </div>
  </div>
);
