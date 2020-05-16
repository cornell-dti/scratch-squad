import React from 'react';
import {
  Link,
} from 'react-router-dom';
import laptop from '../assets/platform/laptop.png';
import involvement1 from '../assets/involvement/1.png';

type Props = {
  readonly img: string;
  readonly link: string;
  readonly title: string;
  readonly description: string;
  readonly involvement: 1 | 2 | 3;
  readonly platform: 'laptop';
};

const platformAssets = {
  laptop,
};

const involvementAssets = {
  1: involvement1,
  2: involvement1,
  3: involvement1,
};

export default ({
  img, link, title, description, involvement, platform,
}: Props) => (
  <div className="lessonwrapper">
    <div className="div1">
      <div className="img1">
        <img src={img} width="90%" className="img" alt="path" />
      </div>
      <div className="right">
        <Link to={`/${link}`} className="title">
          {' '}
          {title}
          {' '}
        </Link>
        <div className="icons">
          <img className="platformicon" src={platformAssets[platform]} alt={`This lesson can be taken on ${platform}`} />
          <img className="involvementicon" src={involvementAssets[involvement]} alt={`Parent involvement ${involvement} out of 3`} />
        </div>
        <div className="description">
          {description}
        </div>
      </div>

    </div>
    <hr />
  </div>
);
