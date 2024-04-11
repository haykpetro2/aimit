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
    <section className={styles['mobile-login']}>
      <div className={styles.container}>
        <div className={styles['cv-steps-main-panel']}>
          <div className={styles['step-image-overlay']}>
            <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
              <Image src="/images/uploads/cv_setting_image_one.png" layout="fill" />
            </div>
          </div>
          <div className={styles['step-image-overlay']}>
            <div data-aos-offset="100" data-aos="fade-right" className={styles['step-image']}>
              <Image src="/images/uploads/cv_setting_image_two.png" layout="fill" />
            </div>
          </div>
          <div className={styles['step-image-overlay']}>
            <div data-aos-offset="100" data-aos="fade-left" className={styles['step-image']}>
              <Image src="/images/uploads/cv_setting_image_three.png" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
