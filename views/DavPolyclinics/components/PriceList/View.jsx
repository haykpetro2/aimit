import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['pricelist-section']}>
      <div className="container">
        <div className={`section-heading ${styles['section-heading']}`}>
          <h1>{/* <Trans t={t}>{t('mainPagePriceList')}</Trans> */}</h1>
        </div>
        <div data-aos="zoom-in-up" className={styles['pricelist-mainpanel']}>
          <div className={styles['section-image']}>
            <Image src="/images/uploads/price_list_image.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
