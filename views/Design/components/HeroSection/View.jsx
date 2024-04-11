import React from 'react';
import styles from './style.module.scss';
import DesignHero from '../../../../svgs/DesignHero';

export const View = () => {
  return (
    <section className={styles['hero-section']}>
      <div className="container">
        <div className={styles['hero-section-mainpanel']}>
          <div className={styles['hero-section-description']}>
            <div className={styles['section-heading']}>
              <h1>UX / UI Design</h1>
            </div>
            <div className={styles['section-description']}>
              <p>
                Validate innovative ideas, develop niche product concepts and create the blueprint
                for your product’s success, with Aimit
              </p>
            </div>
          </div>
          <div className={styles['hero-section-image']}>
            <DesignHero />
          </div>
        </div>
      </div>
    </section>
  );
};