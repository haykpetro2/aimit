import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AddBoard from './components/AddBoard';
import styles from './style.module.scss';

export const View = ({ isMobile, t }) => {
  return (
    <section className={styles['work-section']}>
      <div className={`section-heading ${styles['section-headline']}`}>
        <h3>{t('howItWorks')}</h3>
      </div>
      <div className="container">
        <div className={styles['section-mainpanel']}>
          {!isMobile ? (
            <div className={styles['work-img']}>
              <Image src="/images/uploads/how_it_work.png" layout="fill" />
            </div>
          ) : (
            <>
              <div className={styles['step-msg']}>
                <p>{t('moulkCrmWorkText')}</p>
              </div>
              <div className={styles['work-img']}>
                <Image src="/images/uploads/moulk_work_mobile.png" layout="fill" />
              </div>
              <div className={`${styles['work-img']} ${styles['login-img']}`}>
                <Image src="/images/uploads/moulk_work_mobile2.png" layout="fill" />
              </div>
              <div className={styles['step-msg']}>
                <p>{t('moulkCrmWorkText')}</p>
              </div>
            </>
          )}

          <AddBoard />
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  isMobile: PropTypes.bool,
};
