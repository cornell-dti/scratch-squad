import React from 'react';
import Lesson from '../components/Lesson';
import Nav from '../components/Nav';
import '../App.css';
import scratchimage from '../assets/scratchimage.png';
import businessimage from '../assets/businessimage.png';
import a3image from '../assets/a3image.png';
import home from '../assets/home.png';

export default () => {

  const scratchDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, felis sit amet elementum fermentum, 
  ipsum augue hendrerit ipsum, eget euismod leo enim sit amet est. Nulla at ante ac quam dignissim aliquet nec vitae dolor. 
  Phasellus iaculis arcu purus, sed bibendum erat tempor nec.`;

  const businessDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, felis sit amet elementum fermentum, 
  ipsum augue hendrerit ipsum, eget euismod leo enim sit amet est. Nulla at ante ac quam dignissim aliquet nec vitae dolor. 
  Phasellus iaculis arcu purus, sed bibendum erat tempor nec.`;

  const a3Desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, felis sit amet elementum fermentum, 
  ipsum augue hendrerit ipsum, eget euismod leo enim sit amet est. Nulla at ante ac quam dignissim aliquet nec vitae dolor. 
  Phasellus iaculis arcu purus, sed bibendum erat tempor nec.`;

  return (
    <div>
      <Nav />
      <div className="belownav">
        <img src={home} className="homeImage" alt="Matt at the makeathon" />
        <div className="homeText" >
          <div className="homeTitle"> Innovate at home.  </div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, felis sit amet elementum fermentum,
            ipsum augue hendrerit ipsum, eget euismod leo enim sit amet est.
          </div>
        </div>
        <Lesson img={scratchimage} link="scratch" title="Scratch from Scratch" description={scratchDesc} involvement={1} platform="laptop" />
        <Lesson img={businessimage} link="business" title="Learn about Business" description={businessDesc} involvement={1} platform="laptop" />
        <Lesson img={a3image} link="a3" title="Tackling Evan's A3 from FA18" description={a3Desc} involvement={1} platform="laptop" />
      </div>
    </div>
  );
}

