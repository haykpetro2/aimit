import React from 'react';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['getInTouch-section']}>
      <div className="container">
        <div className={styles['getInTouch-section-mainpanel']}>
          <div className={styles['section-description-overlay']}>
            <div className={styles['section-big-headline']}>
              <h2>Let’s Make Your New Project Real</h2>
            </div>
            <div className={styles['section-big-description']}>
              <p>Get in touch with us to discuss new product ideas and business opportunities.</p>
            </div>
          </div>
          <div className={styles['getInTouch-btn-overlay']}>
            <button type="button" className={styles['getInTouch-btn']}>
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
