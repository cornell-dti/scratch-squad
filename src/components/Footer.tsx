import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DTILogo from '../assets/dti_dark.png';
import styles from '../styles/Footer.module.css';

export default (): React.ReactElement => (
  <div className={styles.footer}>
    <a href="https://cornelldti.org/">
      <img src={DTILogo} alt="Cornell Design & Tech Initiative" />
    </a>
    <div className={styles.links}>
      <a href="https://www.facebook.com/cornelldti">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
      <a href="https://www.instagram.com/cornelldti">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
      <a href="https://www.youtube.com/channel/UCjLyT3n4RdidDDnWn4GDBEA">
        <FontAwesomeIcon icon={['fab', 'youtube']} />
      </a>
      <a href="https://www.github.com/cornell-dti">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
    </div>
  </div>
);
