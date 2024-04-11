import React from 'react';
import PropTypes from 'prop-types';
import Like from '../../../../svgs/Like';
import CircleAnimation from '../../../../components/CircleAnimation';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['hero-section']}>
      <div className="container">
        <div className={styles['hero-section-mainpanel']}>
          <div className={styles['hero-section-description-overlay']}>
            <div className={styles['section-heading']}>
              <h1>{t('itCareer')}</h1>
            </div>
          </div>
          <div className={styles['hero-section-image-overlay']}>
            <div className={styles['section-icon']}>
              <CircleAnimation strokeWidth="5" stroke="#9FBEF3  " />
            </div>
            <div className={styles.icon}>
              <Like />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
