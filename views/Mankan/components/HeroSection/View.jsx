import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import HeroImage from '../../../../public/images/uploads/mankan-hero.png';
import styles from './style.module.scss';

export const View = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-section-mainpanel']}>
        <div className={styles['hero-images-overlay']}>
          <div className={styles['hero-image']}>
            <Image layout="fill" src={HeroImage} />
          </div>
          <div data-aos="zoom-in-up" className={styles['hero-image-shadow']}>
            <Image layout="fill" src={HeroImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
