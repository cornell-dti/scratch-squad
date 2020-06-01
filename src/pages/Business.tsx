import React from 'react';
import InnerLesson from '../components/InnerLesson';
import businessimage from '../assets/businessimage.png';
import Footer from '../components/Footer';

const businessProps = {
  img: businessimage,
  title: 'Extracurriculars with Business',
  description: `This is the description for the Business lesson. Here is some text to make it a little longer. 
  And now I am going to make it even longer because it wasn't long enough before that.`,
  lessons: [],
};

export default () => (
  <>
    <InnerLesson
      img={businessProps.img}
      title={businessProps.title}
      description={businessProps.description}
      lessons={businessProps.lessons}
    />
    <Footer />
  </>
);
