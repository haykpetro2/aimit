import React from 'react';
import styles from './style.module.scss';

export const View = () => {
  return (
    <div className={styles['mobile-circle-overlay']}>
      <div className={styles.mobileCirlce} />
    </div>
  );
};
