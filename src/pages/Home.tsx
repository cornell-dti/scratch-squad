import React from 'react';
import Lesson from '../components/Lesson';
import Nav from '../components/Nav';
import '../App.css';
import scratchimage from '../assets/scratchimage.png';
import businessimage from '../assets/businessimage.png';
import a3image from '../assets/a3image.png';
import home from '../assets/home.png';

export default () => {
  const scratchDesc = `In this video series, we will walk you through how to use Scratch, a friendly block-based
  programming language. It's super fun and great for beginners!`;

  const businessDesc = `In this blog series, some of DTI's amazing business team members will walk you through
  their favorite fun things to do outside of school!`;

  const appdevDesc = `In this video series, we will teach you about the basics of app development, from user interviews 
  and prototyping to design and development.`;

  return (
    <div className="wrapper">
      <Nav />
      <div className="belownav">
        <img src={home} className="homeImage" alt="Matt at the makeathon" />
        <div className="homeText">
          <div className="homeTitle"> Innovate at home.  </div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            In aliquam, felis sit amet elementum fermentum,
            ipsum augue hendrerit ipsum, eget euismod leo enim sit amet est.
          </div>
        </div>
        <Lesson img={scratchimage} link="scratch" title="Starting from Scratch" description={scratchDesc} involvement={1} platform="laptop" />
        <Lesson img={businessimage} link="business" title="Extracurriculars with Business!" description={businessDesc} involvement={1} platform="laptop" />
        <Lesson img={a3image} link="appdev" title="Basics of App Development" description={appdevDesc} involvement={1} platform="laptop" />
      </div>
    </div>
  );
};
