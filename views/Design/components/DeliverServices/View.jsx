import React from 'react';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['deliver-section']}>
      <div className="container">
        <div className="section-heading">
          <h1>HOW WE DELIVER UI AND UX SERVICES</h1>
        </div>
        <div className={styles['section-description']}>
          <p>
            A decade in design has allowed our team to perfect the process of delivering UI and UX
            services. We follow established design standards, workflows, and guidelines — you get
            the product you need, delivered by expert designers within the set timeframe.
          </p>
        </div>
        <div className={styles['deliver-section-mainpanel']}>
          <div className={styles['mainpanel-headline']}>
            <h3>UX Design process</h3>
          </div>
          <div className={styles['step-listing']}>
            <ul>
              <li className="col_">
                <span className={styles['listing-number']}>1</span>
                <span className={styles['listing-name']}>Analysis</span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>2</span>
                <span className={styles['listing-name']}>
                  Interface <br /> architecture
                </span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>3</span>
                <span className={styles['listing-name']}>
                  Sketching <br /> Wireframes
                </span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>4</span>
                <span className={styles['listing-name']}>
                  AnDynamic <br /> prototype
                </span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>5</span>
                <span className={styles['listing-name']}>Editing</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['deliver-section-mainpanel']}>
          <div className={styles['mainpanel-headline']}>
            <h3>UI Design process</h3>
          </div>
          <div className={styles['step-listing']}>
            <ul>
              <li className="col_">
                <span className={styles['listing-number']}>1</span>
                <span className={styles['listing-name']}>
                  Design <br /> refereneces
                </span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>2</span>
                <span className={styles['listing-name']}>
                  Graphic <br /> Interface{' '}
                </span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>3</span>
                <span className={styles['listing-name']}>
                  Animation <br /> prototype
                </span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>4</span>
                <span className={styles['listing-name']}>UI kit</span>
              </li>
              <li className="col_">
                <span className={styles['listing-number']}>5</span>
                <span className={styles['listing-name']}>
                  Design <br /> rewiew
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
