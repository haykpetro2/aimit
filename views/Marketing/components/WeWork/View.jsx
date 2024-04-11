import React from 'react';
import Image from 'next/image';
import WebSearch from '../../../../public/images/uploads/web_search.png';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['work-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>How we work</h2>
        </div>

        <div className={styles['work-section_mainpanel']}>
          <div className={styles['work-image']}>
            <Image layout="fill" src={WebSearch} />
          </div>
          <div className={styles['we-work-listing']}>
            <ul>
              <li>
                <p className={styles['list-number']}>1</p>
                <p className={styles['list-message']}>Problem understanding</p>
              </li>
              <li>
                <p className={styles['list-number']}>2</p>
                <p className={styles['list-message']}>Project analysis</p>
              </li>
              <li>
                <p className={styles['list-number']}>3</p>
                <p className={styles['list-message']}>Competitor analysis</p>
              </li>
              <li>
                <p className={styles['list-number']}>4</p>
                <p className={styles['list-message']}>Strategy development and implementation</p>
              </li>
              <li>
                <p className={styles['list-number']}>5</p>
                <p className={styles['list-message']}>Start / month report</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
