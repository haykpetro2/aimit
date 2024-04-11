import React from 'react';
import Image from 'next/image';
import ReactImg from '../../public/images/uploads/react.png';
import C from '../../public/images/uploads/C.png';
import php from '../../public/images/uploads/php.png';
import android from '../../public/images/uploads/android.png';
import angular from '../../public/images/uploads/angular.png';
import javascript from '../../public/images/uploads/javascript.png';
import Csharp from '../../public/images/uploads/Csharp.png';
import Java from '../../public/images/uploads/java.png';
import Laravel from '../../public/images/uploads/laravel.png';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['tech-section']}>
      <div className="container">
        <div className={styles['tech-section-mainpanel']}>
          <div className={styles['section-big-headline']}>
            <h2>Technologies We Use</h2>
          </div>
          <div className={styles['tech-widgets-mainpanel']}>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={99} height={87} src={ReactImg} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={78} height={87} src={C} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={135} height={69} src={php} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={77} height={84} src={android} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={72} height={75} src={angular} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={78} height={87} src={javascript} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={72} height={87} src={Csharp} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={43} height={77} src={Java} />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['tech-widegt-ovaerlay']}`}>
              <div className={styles['tech-widget']}>
                <div className={styles['tech-widget-image']}>
                  <Image width={100} height={69} src={Laravel} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
