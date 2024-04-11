import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../svgs/Arrow';
import styles from './style.module.scss';

export const View = ({ headline, description }) => {
  return (
    <section className={styles['more-section']}>
      <div className="container">
        <div className={styles['more-section-mainpanel']}>
          <div className={styles['section-big-headline']}>
            <h2>{headline}</h2>
          </div>
          <div className={styles['more-mainpanel']}>
            <div className={styles['more-text']}>
              <p>{description}</p>
              <div className={styles['more-actions']}>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.string,
};
