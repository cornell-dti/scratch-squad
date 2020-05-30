import React from 'react';
import Nav from './Nav';
import '../styles/InnerLesson.css';

type Lesson = {
  url: string;
  title: string;
  description: string;
}

type Props = {
  readonly img: string;
  readonly title: string;
  readonly description: string;
  readonly lessons: Lesson [];
}

export default ({
  img, title, description, lessons,
}: Props) => (
  <div className="wrapper">
    <Nav />
    <div className="belowNav">
      <img src={img} className="lessonImage" alt="Lesson" />
      <div className="lessonText">
        <div className="lessonTitle">{title}</div>
        <div className="lessonSubtitle">{description}</div>
      </div>
    </div>
    {lessons.map((lesson) => (
      <div className="lessonVideo">
        <iframe title={lesson.url} src={lesson.url} className="video" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" />
        <div className="videoText">
          <div className="videoTitle">{lesson.title}</div>
          <div className="videoSubtitle">{lesson.description}</div>
        </div>
      </div>
    ))}
  </div>
);
