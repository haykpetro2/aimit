import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import styles from './style.module.scss';

export const View = ({ t }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['responsive-section']}>
      <div className={styles.container}>
        <div className={`section-heading ${styles['section-heading']}`}>
          <h2>{t('responsiveDesign')}</h2>
        </div>
        <div className={styles['responsive-mainpanel']}>
          <div data-aos="fade-right" className={styles['left-screen']}>
            <Image layout="fill" src="/images/uploads/responsive1.png" />
          </div>
          <div data-aos="fade-left" className={styles['right-screen']}>
            <Image layout="fill" src="/images/uploads/responsive2.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
