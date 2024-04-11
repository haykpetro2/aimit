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
    <section className={styles['cv-steps']}>
      <div className={styles['section-headline']}>
        <h2>All steeps</h2>
      </div>
      <div className={styles['cv-steps-main-panel']}>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_one.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-right" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_two.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_three.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-right" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_four.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_five.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-right" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_six.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_sevan.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-right" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_eat.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_nine.png" layout="fill" />
          </div>
        </div>
        <div className={styles['step-image-overlay']}>
          <div data-aos-offset="100" data-aos="fade-right" className={styles['step-image']}>
            <Image src="/images/uploads/cv_step_ten.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};
