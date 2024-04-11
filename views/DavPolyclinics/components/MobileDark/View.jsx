import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  return (
    <section className={`${styles['mobile-section']}`}>
      <div className={styles.container}>
        <div className={styles['section-big-headline']}>
          <h2>{t('darkMode')}</h2>
        </div>
        <div className={styles['mobile-mainpanel']}>
          <div className="col_">
            <div data-aos="zoom-in-left" className={`${styles['section-image']}`}>
              <Image src="/images/uploads/mobiledark1.png" layout="fill" />
            </div>
          </div>
          <div className="col_">
            <div data-aos="zoom-in-right" className={`${styles['section-image']}`}>
              <Image src="/images/uploads/mobiledark2.png" layout="fill" />
            </div>
          </div>
          <div className="col_">
            <div data-aos="zoom-in-left" className={` ${styles['section-image']}`}>
              <Image src="/images/uploads/mobiledark3.png" layout="fill" />
            </div>
          </div>
          <div className="col_">
            <div data-aos="zoom-in-right" className={`${styles['section-image']}`}>
              <Image src="/images/uploads/mobiledark4.png" layout="fill" />
            </div>
          </div>
        </div>
        <div className={styles['section-middle-headline']}>
          <h2>{t('davPolScreens')}</h2>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
