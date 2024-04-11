import React from 'react';
import styles from './style.module.scss';

export const View = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader} />
      <div className={styles.loaderRound} />
    </div>
  );
};
