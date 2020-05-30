import React from 'react';
import InnerLesson from '../components/InnerLesson';
import a3image from '../assets/a3image.png';

const appdevProps = {
  img: a3image,
  title: 'Basics of App Development',
  description: "This is the description for the App Dev lesson. Here is some text to make it a little longer. \
  And now I am going to make it even longer because it wasn't long enough before that.",
  lessons: [],
};

export default () => (
  <InnerLesson
    img={appdevProps.img}
    title={appdevProps.title}
    description={appdevProps.description}
    lessons={appdevProps.lessons}
  />
);
