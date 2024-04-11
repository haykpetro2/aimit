import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['about-section']}>
      <div className="container">
        <div className={`section-heading ${styles['section-heading']}`}>
          <h2>{t('mallsAboutProject')}</h2>
        </div>
        <div className={styles['section-description']}>
          <p>{t('caseStudiesDescMalls')}</p>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
