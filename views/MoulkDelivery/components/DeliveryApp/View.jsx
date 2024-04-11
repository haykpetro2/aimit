import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ t, isLaptop, isSmallTablet }) => {
  return (
    <section className={styles['delivary-section']}>
      <div className="container">
        <div className="section-heading">
          <h3>{t('moulkDelivery')}</h3>
        </div>
        {!isLaptop ? (
          <div className={styles['delivary-app']}>
            <div data-aos="zoom-out-right" className={styles['screen-image']}>
              <Image src="/images/uploads/sign-up.png" layout="fill" />
            </div>
            <div
              data-aos="zoom-out-right"
              className={`${styles['screen-image']} ${styles['signIn-image']}`}
            >
              <Image src="/images/uploads/sign_in.png" layout="fill" />
            </div>
            <div
              data-aos="zoom-out-right"
              className={`${styles['screen-image']} ${styles['order-history']}`}
            >
              <Image src="/images/uploads/orders.png" layout="fill" />
            </div>
            <div className={styles['order-images']}>
              <div data-aos="zoom-out-left" className={styles['screen-image']}>
                <Image src="/images/uploads/order.png" layout="fill" />
              </div>
              <div data-aos="zoom-out-left" className={styles['screen-image']}>
                <Image src="/images/uploads/profile.png" layout="fill" />
              </div>
            </div>
            <div
              data-aos="zoom-out-left"
              className={`${styles['screen-image']} ${styles['order-detail']}`}
            >
              <Image src="/images/uploads/order_details.png" layout="fill" />
            </div>
          </div>
        ) : (
          <div className={`${styles['delivary-app-ismobile']}`}>
            <div className={styles['screen-group']}>
              <div data-aos="zoom-out-left" className={styles['screen-image']}>
                <Image src="/images/uploads/sign-up.png" layout="fill" />
              </div>
              <div
                data-aos="zoom-out-left"
                className={`${styles['screen-image']} ${styles['order-history']}`}
              >
                <Image src="/images/uploads/orders.png" layout="fill" />
              </div>
              <div data-aos="zoom-out-left" className={styles['screen-image']}>
                <Image src="/images/uploads/profile.png" layout="fill" />
              </div>
            </div>
            <div className={styles['screen-group']}>
              <div
                data-aos="zoom-out-left"
                className={`${styles['screen-image']} ${styles['signIn-image']}`}
              >
                <Image src="/images/uploads/sign_in.png" layout="fill" />
              </div>
              <div
                data-aos="zoom-out-left"
                className={`${styles['screen-image']} ${styles['order-detail']}`}
              >
                <Image src="/images/uploads/order_details.png" layout="fill" />
              </div>
              {isSmallTablet ? (
                <div data-aos="zoom-out-left" className={styles['screen-image']}>
                  <Image src="/images/uploads/order.png" layout="fill" />
                </div>
              ) : (
                <div />
              )}
            </div>
            {!isSmallTablet ? (
              <div data-aos="zoom-out-left" className={styles['screen-image']}>
                <Image src="/images/uploads/order.png" layout="fill" />
              </div>
            ) : (
              <div />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  isLaptop: PropTypes.bool,
  isSmallTablet: PropTypes.bool,
};
