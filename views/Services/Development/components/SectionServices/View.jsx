import React from 'react';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['services-section']}>
      <div className="container">
        <div className={styles['sevices-section-mainpanel']}>
          <div className={styles['section-big-headline']}>
            <h2>From Concept To Working Software & Everything In Between</h2>
          </div>
          <div className={styles['service-widgets']}>
            <div className={`col_ ${styles['service-widget-overlay']}`}>
              <div className={styles['service-widget']}>
                <div className={styles['service-widget-name']}>
                  <h4>Analysis</h4>
                </div>
                <div className={styles['service-widget-description']}>
                  <p>
                    We use our UX/UI know-how to create user-centric software design and build
                    prototypes to check that the product is user-friendly and meets your business
                    needs at the same time.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['service-widget-overlay']}`}>
              <div className={styles['service-widget']}>
                <div className={styles['service-widget-name']}>
                  <h4>Analysis</h4>
                </div>
                <div className={styles['service-widget-description']}>
                  <p>
                    We use our UX/UI know-how to create user-centric software design and build
                    prototypes to check that the product is user-friendly and meets your business
                    needs at the same time.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['service-widget-overlay']}`}>
              <div className={styles['service-widget']}>
                <div className={styles['service-widget-name']}>
                  <h4>Analysis</h4>
                </div>
                <div className={styles['service-widget-description']}>
                  <p>
                    We use our UX/UI know-how to create user-centric software design and build
                    prototypes to check that the product is user-friendly and meets your business
                    needs at the same time.
                  </p>
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['service-widget-overlay']}`}>
              <div className={styles['service-widget']}>
                <div className={styles['service-widget-name']}>
                  <h4>Analysis</h4>
                </div>
                <div className={styles['service-widget-description']}>
                  <p>
                    We use our UX/UI know-how to create user-centric software design and build
                    prototypes to check that the product is user-friendly and meets your business
                    needs at the same time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
