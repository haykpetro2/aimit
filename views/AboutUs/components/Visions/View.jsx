import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import CEO from '../../../../public/images/team/CEO.png';
import CTO from '../../../../public/images/team/CTO.png';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['visions-section']}>
      <div className="container">
        <div className="section-heading">
          <h1>{t('ourVision')}</h1>
        </div>
        <div className={styles['visons-section-mainpanel']}>
          <div className={styles['vision-items']}>
            <div className={`col_ ${styles['vision-item']}`}>
              <div className={styles['vision-item-image']}>
                <Image layout="fill" src={CEO} objectFit="cover" alt="Ceo Founder" />
              </div>
              <div className={styles['vision-item-footer']}>
                <div className={styles['vision-item-description']}>
                  <p>
                    {/* <Trans t={t}>{t('ourVisionFirstTextHayk')}</Trans> */}
                    <br />
                    <br />
                    {/* <Trans t={t}>{t('ourVisionSecondTextHayk')}</Trans> &#128578; */}
                    <br />
                    <br />
                    CEO, Hayk Petrosyan
                  </p>
                </div>
              </div>
            </div>
            <div className={`col_ ${styles['vision-item']}`}>
              <div className={styles['vision-item-image']}>
                <Image layout="fill" src={CTO} objectFit="cover" alt="Ceo Founder" />
              </div>
              <div className={styles['vision-item-footer']}>
                <div className={styles['vision-item-description']}>
                  <p>
                    {/* <Trans t={t}>{t('ourVisionFirstTextArkadi')}</Trans> */}
                    <br />
                    <br />
                    {/* <Trans t={t}>{t('ourVisionSecondTextArkadi')}</Trans> &#128578; */}
                    <br />
                    <br />
                    CTO, Arkadi Khachatryan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
