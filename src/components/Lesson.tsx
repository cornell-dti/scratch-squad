// TODO: avoid dynamic require
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

type Props = {
  readonly img: string;
  readonly link: string;
  readonly title: string;
  readonly description: string;
  readonly involvement: number;
  readonly platform: string;
};

export default ({
  img, link, title, description, involvement, platform,
}: Props) => (
  <div className="wrapper">
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
          <img className="platformicon" src={require(`../assets/platform/${platform}.png`)} alt={`This lesson can be taken on ${platform}`} />
          <img className="involvementicon" src={require(`../assets/involvement/${involvement}.png`)} alt={`Parent involvement ${involvement} out of 3`} />
        </div>
        <div className="description">
          {description}
        </div>
      </div>

    </div>
    <hr />
  </div>
);
