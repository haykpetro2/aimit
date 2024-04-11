import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './style.module.scss';
import Elements from '../../../../svgs/Elements';

export const View = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles['cv-elements']}>
      <div className={styles['section-headline']}>
        <h3>ELEMENTS</h3>
      </div>
      <div className={styles['cv-elements-main-panel']}>
        <div className={styles['elements-image']}>
          <Elements />
        </div>
      </div>
    </section>
  );
};
