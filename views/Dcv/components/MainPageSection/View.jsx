import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Image from 'next/image';
import styles from './style.module.scss';

export const View = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles['main-page-section']}>
      <div className={styles['section-headline']}>
        <h3>Main page</h3>
      </div>
      <div className={styles['section-main-panel']}>
        <div className={styles['section-image-overlay']}>
          <div data-aos="fade-up" className={styles['section-image']}>
            <Image src="/images/uploads/dcv_homepage.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};
