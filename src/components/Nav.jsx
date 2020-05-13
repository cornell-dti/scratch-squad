import React from 'react';
import logo from '../assets/dti.png';

export default () => {
  return (
    <div className="navbar">
      <img src={logo} alt="DTI Logo" id="logo" />
      <div id="links">
        <a>Contact Us</a>
        <a>Meet the Team</a>
        <a>About DTI</a>
      </div>
    </div>
  )
}