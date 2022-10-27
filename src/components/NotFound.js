import React from 'react';
import Asset from './Asset';
import Noresult from '../assets/close.png';
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={Noresult}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};


export default NotFound