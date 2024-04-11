import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../../../../svgs/Blog';
import Subscribe from './components/Subscribe';
import styles from './style.module.scss';
import CircleAnimation from '../../../../components/CircleAnimation';

export const View = ({ t }) => {
  return (
    <section className={styles['hero-section']}>
      <div className="container">
        <div className={styles['hero-section-mainpanel']}>
          <div className={styles['left-side']}>
            <div className={styles['hero-section-description-overlay']}>
              <div className={styles['section-heading']}>
                <h1>{t('blog')}</h1>
              </div>
              <div className={styles['hero-description-text']}>
                <div className="description">
                  <p>{t('blogText')}</p>
                </div>
              </div>
            </div>
            <div className={styles['email-here']}>
              <Subscribe />
            </div>
          </div>

          <div className={styles['hero-section-image-overlay']}>
            <div className={styles['section-icon']}>
              <CircleAnimation strokeWidth="10" stroke="#fff" />
            </div>
            <div className={styles.icon}>
              <Blog />
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
