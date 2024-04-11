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
    <section className={styles['hero-section']}>
      <div className={styles['hero-section-mainpanel']}>
        <div className={styles['section-descriptions']}>
          <div className={styles['section-headline']}>
            <h1>{/* <Trans t={t}>{t('moulkStore')}</Trans> */}</h1>
          </div>
          <div className={styles['section-subHeadline']}>
            <p>{t('moulkStoreText')}</p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="3000" className={styles.moulk_login}>
          <Image layout="fill" src="/images/uploads/moulk_login.png" />
        </div>

        <div data-aos-duration="3000" data-aos="fade-up" className={styles.moulk_admin}>
          <Image layout="fill" src="/images/uploads/moulk_admin.png" />
        </div>
        <div data-aos="fade-right" className={styles.select_example}>
          <Image layout="fill" src="/images/uploads/select-example.png" />
        </div>
        <div data-aos="fade-right" className={styles.moulk_select}>
          <Image layout="fill" src="/images/uploads/moulk_select.png" />
        </div>
        <div className={styles.mobileShop_overaly}>
          <div className={styles.mobileShopText}>
            <p>Sell on web, sell on mobile</p>
          </div>
          <div className={styles.mobile_shop}>
            <Image layout="fill" src="/images/uploads/mobile_shop.png" />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className={styles.table_example}>
          <Image layout="fill" src="/images/uploads/table_example.png" />
        </div>
        <div data-aos="fade-up" data-aos-duration="4000" className={styles.rate}>
          <Image layout="fill" src="/images/uploads/rate.png" />
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
