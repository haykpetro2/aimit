import PropTypes from 'prop-types';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './style.module.scss';

export const View = ({ title = '', t }) => {
  return (
    <div className={styles.industriesItem}>
      <div className={styles['industriesItem-name']}>
        <h3>{t(title)}</h3>
      </div>
      <div className={styles['industriesItem-description']}>
        <p>{/* <Trans t={t}>{t(description)}</Trans> */}</p>
      </div>
    </div>
  );
};

View.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func,
  description: PropTypes.string,
};
