import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './style.module.scss';

export const View = ({ t }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['architecture-section']}>
      <div className="container">
        <div className={styles['partials-view']}>
          <div className={`section - heading ${styles['section-heading']}`}>
            <h2>{t('view')}</h2>
          </div>
          <div className={`section-description ${styles['section-description']}`}>
            <p>{t('moulkViewText')}</p>
          </div>
        </div>
        <div className={styles['architecture-section_mainpanel']}>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={styles['partial-1']}
          >
            <Image src="/images/uploads/part1.png" layout="fill" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
            className={styles['partial-2']}
          >
            <Image src="/images/uploads/part2.png" layout="fill" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2500"
            className={styles['partial-3']}
          >
            <Image src="/images/uploads/part3.png" layout="fill" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="3000"
            className={styles['partial-4']}
          >
            <Image src="/images/uploads/part4.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
