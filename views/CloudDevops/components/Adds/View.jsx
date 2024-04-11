import React from 'react';
import WithoutDevopsCircle from '../../../../svgs/WithoutDevopsCircle';
import WithDevops from '../../../../svgs/WithDevopsCircle';
import Specialists from '../../../../svgs/Specialists';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['adds-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>Value DevOps adds to a project</h2>
        </div>
        <div className={`description ${styles['section-description']}`}>
          <p>Feel the difference between project with DevOps and without</p>
        </div>

        <div className={styles['adds-section_mainpanel']}>
          <div className={`col_ ${styles['adds-item-overlay']}`}>
            <div className={styles['adds-item']}>
              <div className={styles['adds-item-headline']}>
                <h2>Time team needs for release</h2>
              </div>
              <div className={styles['release-items']}>
                <div className={styles['release_item-overlay']}>
                  <div className={styles['release-item-headline']}>
                    <h3>Without devops</h3>
                  </div>
                  <div className={styles['release-item']}>
                    <WithoutDevopsCircle />
                  </div>
                  <div className={styles['release-item-info']}>
                    <p>8h</p>
                  </div>
                </div>
                <div className={styles['release_item-overlay']}>
                  <div className={styles['release-item-headline']}>
                    <h3>With devops</h3>
                  </div>
                  <div className={styles['release-item']}>
                    <WithDevops />
                  </div>
                  <div className={styles['release-item-info']}>
                    <p>0.1h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col_ ${styles['adds-item-overlay']}`}>
            <div className={styles['adds-item']}>
              <div className={styles['adds-item-headline']}>
                <h2>Quantity of specialists required for release</h2>
              </div>
              <div className={styles['release-items']}>
                <div className={styles['release_item-overlay']}>
                  <div className={styles['release-item-headline']}>
                    <h3>Without devops</h3>
                  </div>
                  <div className={styles['release-item']}>
                    <Specialists />
                  </div>
                  <div className={styles['release-item-info']}>
                    <p>5-10 specialists</p>
                  </div>
                </div>
                <div className={styles['release_item-overlay']}>
                  <div className={styles['release-item-headline']}>
                    <h3>With devops</h3>
                  </div>
                  <div className={styles['release-item']}>
                    <Specialists />
                  </div>
                  <div className={styles['release-item-info']}>
                    <p>2-3 specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
