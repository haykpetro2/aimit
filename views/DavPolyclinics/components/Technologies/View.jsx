import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  return (
    <section className={styles['technologies-section']}>
      <div className={styles.container}>
        <div className={`section-heading ${styles['section-heading']}`}>
          <h1>{t('technologies')}</h1>
        </div>
        <div className={styles['technologies-mainpanel']}>
          <div className={styles['technologies-item']}>
            <div className={styles['technologie-name']}>
              <h3>
                PHP <br /> Laravel
              </h3>
            </div>
          </div>
          <div className={styles['technologies-item']}>
            <div className={styles['technologie-name']}>
              <h3>Node JS</h3>
            </div>
          </div>
          <div className={styles['technologies-item']}>
            <div className={styles['technologie-name']}>
              <h3>React</h3>
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
