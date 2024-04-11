import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  return (
    <section className={styles['news-section']}>
      <div className="container">
        <div className={styles['section-big-headline']}>
          <h2>{t('darkMode')}</h2>
        </div>
        <div className={`section-heading ${styles['section-heading']}`}>
          <h1>{/* <Trans t={t}>{t('mainPageNews')}</Trans> */}</h1>
        </div>
        <div data-aos="zoom-in-up" className={styles['news-mainpanel']}>
          <div className={styles['section-image']}>
            <Image src="/images/uploads/news_image.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
