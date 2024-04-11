import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  console.log(t, 't');
  return (
    <section className={styles['doctors-section']}>
      <div className="container">
        <div className={`section-heading ${styles['section-heading']}`}>
          <h1>{/* <Trans t={t}>{t('mainPageDoctors')}</Trans> */}</h1>
        </div>
        <div className={styles['doctors-mainpanel']}>
          <div className={styles['section-image']}>
            <Image src="/images/uploads/doctors_image.png" layout="fill" />
          </div>
          <div data-aos="zoom-in-up" className={styles['doctor-image']}>
            <Image src="/images/uploads/doctor.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
