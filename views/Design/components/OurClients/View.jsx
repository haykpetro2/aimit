import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['ourClients-section']}>
      <div className="container">
        <div className="section-heading">
          <h3>Our Clients</h3>
        </div>
        <div className="description">
          <p>
            Fortune 500 companies and businesses across key industries trust our UI and UX services.
          </p>
        </div>
        <div className={styles['ourClients-mainpanel']}>
          <div className="col_">
            <div className={`${styles['partner-image']}`}>
              <Image layout="fill" src="/images/uploads/partner_logo_1.png" />
            </div>
          </div>
          <div className="col_">
            <div className={`${styles['partner-image']}`}>
              <Image layout="fill" src="/images/uploads/partner_logo_2.png" />
            </div>
          </div>
          <div className="col_">
            <div className={`${styles['partner-image']}`}>
              <Image layout="fill" src="/images/uploads/partner_logo_3.png" />
            </div>
          </div>
          <div className="col_">
            <div className={`${styles['partner-image']}`}>
              <Image layout="fill" src="/images/uploads/partner_logo_4.png" />
            </div>
          </div>
          <div className="col_">
            <div className={`${styles['partner-image']}`}>
              <Image layout="fill" src="/images/uploads/partner_logo_5.png" />
            </div>
          </div>
          <div className="col_">
            <div className={`${styles['partner-image']}`}>
              <Image layout="fill" src="/images/uploads/partner_logo_6.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
