import React from 'react';
import InstagramSwiper from './components/InstagramSwiper';
import styles from './style.module.scss';

export const View = () => {
  return (
    <div className={styles['slider-overlay']}>
      <InstagramSwiper />
    </div>
  );
};
