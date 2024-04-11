import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Image from 'next/image';
import styles from './style.module.scss';

export const View = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles['cv-steps']}>
      <div className={styles['step-left-side']}>
        <div data-aos-offset="300" data-aos="fade-right" className={styles['left-step-sidebar']}>
          <p>Contact Information</p>
        </div>
        <div data-aos-offset="400" data-aos="fade-right" className={styles['left-step-image']}>
          <Image src="/images/uploads/cv_left_image.png" layout="fill" />
        </div>
      </div>
      <div className={styles['step-right-side']}>
        <div data-aos-offset="500" data-aos="fade-left" className={styles['right-step-image']}>
          <Image src="/images/uploads/right_side_imge_two.png" layout="fill" />
        </div>
        <div data-aos-offset="400" data-aos="fade-left" className={styles['right-step-image']}>
          <Image src="/images/uploads/right_side_imge_three.png" layout="fill" />
        </div>
        <div data-aos-offset="300" data-aos="fade-left" className={styles['right-step-image']}>
          <Image src="/images/uploads/right_side_imge_one.png" layout="fill" />
        </div>
      </div>
    </section>
  );
};
