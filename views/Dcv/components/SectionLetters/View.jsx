import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './style.module.scss';

export const View = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles['letter-section']}>
      <div className={styles.container}>
        <div className={styles['letters-headline']}>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            y
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            o
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            u
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            r
          </span>
          <span className={styles['icon-area']} />
          <span data-aos="zoom-in-down" data-aos-duration="500">
            d
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            r
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            e
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            a
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            m
          </span>
          <br />
          <span data-aos="zoom-in-down" data-aos-duration="1500" className={styles['area-green']} />
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            j
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            o
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            b
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            s
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            t
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            a
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            r
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            t
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            s
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            f
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            r
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            o
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            m
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            a
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500" className={styles['area-black']} />
          <span data-aos="zoom-in-down" data-aos-duration="500" className={styles.blue}>
            g
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500" className={styles.blue}>
            o
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500" className={styles.blue}>
            o
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500" className={styles.blue}>
            d
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            c
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            v
          </span>
          <span
            data-aos="zoom-in-down"
            data-aos-duration="500"
            className={`${styles.icon} ${styles['icon-first']}`}
          />
          <span>c</span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            v
          </span>
          <span
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            className={`${styles.icon} ${styles['icon-second']}`}
          />
          <span data-aos="zoom-in-down" data-aos-duration="1500">
            c
          </span>
          <span data-aos="zoom-in-down" data-aos-duration="500">
            v
          </span>
          <span
            data-aos="zoom-in-down"
            data-aos-duration="1500"
            className={`${styles.icon} ${styles['icon-thrty']}`}
          />
        </div>
      </div>
    </section>
  );
};
