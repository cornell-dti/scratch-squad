import React from 'react';
import InnerLesson from '../components/InnerLesson';
import scratchimage from '../assets/scratchimage.png';
import Footer from '../components/Footer';

const scratchProps = {
  img: scratchimage,
  title: 'Starting from Scratch',
  description: `This is the description for the Scratch lesson. Here is some text to make it a little longer.
  And now I am going to make it even longer because it wasn't long enough before that.`,
  lessons: [
    {
      url: 'https://www.youtube.com/embed/WQH1tucJUV0',
      title: 'Lesson 1: Scratch Setup',
      description: 'The first video in our Programming Basics: Starting from Scratch series! This video is an overview of how Scratch works for complete beginners who have never used Scratch.',
    },
    {
      url: 'https://www.youtube.com/embed/tn7zOYst2Tc',
      title: 'Lesson 2: Scratch Basics',
      description: "The first lesson in our Programming Basics: Starting from Scratch series! We'll learn about the Motion, Looks, and Sounds blocks in Scratch and make a 'silly name' where each letter does something fun or silly.",
    },
  ],
};

export default () => (
  <>
    <InnerLesson
      img={scratchProps.img}
      title={scratchProps.title}
      description={scratchProps.description}
      lessons={scratchProps.lessons}
    />
    <Footer />
  </>
);
