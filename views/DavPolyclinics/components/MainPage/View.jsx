import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['mainpage-section']}>
      <div className={styles.container}>
        <div className={`section-heading ${styles['section-heading']}`}>
          <h1>{/* <Trans t={t}>{t('mainPageSpan')}</Trans> */}</h1>
        </div>
        <div data-aos="zoom-in-up" className={styles['mainpage-mainpanel']}>
          <div className={styles['maipage-image-overlay']}>
            <Image src="/images/uploads/mainpagedavclinic.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
