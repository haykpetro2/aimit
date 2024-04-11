import React from 'react';
import Basket from '../../../../../svgs/Basket';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['hero-section']}>
      <div className="container">
        <div className={styles['hero-section-mainpanel']}>
          <div className={styles['hero-section-description-overlay']}>
            <div className={styles['section-heading']}>
              <h1>eCommerce Development Services</h1>
            </div>
            <div className={styles['hero-description-text']}>
              <div className="description">
                Support your eCommerce Development team with Andersens highly-qualified experts or
                entrust us with building your platform from scratch
              </div>
            </div>
          </div>
          <div className={styles['hero-section-image-overlay']}>
            <div className={styles['hero-section-image-white-overlay']}>
              <div className={styles['hero-section-image']}>
                <Basket />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
