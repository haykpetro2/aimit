import React from 'react';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['support-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>Tech support levels with Aimit</h2>
        </div>

        <div className={styles['support-section_mainpanel']}>
          <div className={`col_ ${styles['level-item-overlay']}`}>
            <div className={styles['level-item-list']}>
              <div className={styles['list-headline']}>
                <h4>Support Level 1</h4>
              </div>
              <ul>
                <li>Basic support</li>
                <li>Standard troubleshooting</li>
                <li>Support inquiries via defined channels</li>
              </ul>
            </div>
          </div>
          <div className={`col_ ${styles['level-item-overlay']}`}>
            <div className={styles['level-item-list']}>
              <div className={styles['list-headline']}>
                <h4>Support Level 2</h4>
              </div>
              <ul>
                <li>Level 1 support and troubleshooting</li>
                <li>Pool of seasoned IT experts for complex support cases</li>
                <li>Non-standard cases covered</li>
              </ul>
            </div>
          </div>
          <div className={`col_ ${styles['level-item-overlay']}`}>
            <div className={styles['level-item-list']}>
              <div className={styles['list-headline']}>
                <h4>Support Level 3</h4>
              </div>
              <ul>
                <li>All standard support procedures</li>
                <li>Dedicated experienced experts</li>
                <li>Issues of advanced complexity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
