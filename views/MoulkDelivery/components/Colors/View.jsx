import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['colors-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('colors')}</h2>
        </div>

        <div className={styles['colors-section_mainpanel']}>
          <div className={`col_ ${styles['moulk-blue']} ${styles['color-item']}`}>
            <div className={styles['color-name']}>
              <h3>{t('moulkBlue')}</h3>
            </div>
            <div className={styles['color-hex']}>
              <p>HEX #1875FF</p>
            </div>
          </div>
          <div className={`col_ ${styles['darkgray-item']} ${styles['color-item']}`}>
            <div className={styles['color-name']}>
              <h3>{t('darkGrey')}</h3>
            </div>
            <div className={styles['color-hex']}>
              <p>HEX #C5C7D2</p>
            </div>
          </div>
          <div className={`col_ ${styles['lightgray-item']} ${styles['color-item']}`}>
            <div className={styles['color-name']}>
              <h3>{t('lightGrey')}</h3>
            </div>
            <div className={styles['color-hex']}>
              <p>HEX #F1F4FD</p>
            </div>
          </div>
          <div className={`col_ ${styles['dark-item']} ${styles['color-item']}`}>
            <div className={styles['color-name']}>
              <h3>{t('dark')}</h3>
            </div>
            <div className={styles['color-hex']}>
              <p>HEX #212121</p>
            </div>
          </div>
          <div className={`col_ ${styles['white-item']} ${styles['color-item']}`}>
            <div className={styles['color-name']}>
              <h3>{t('white')}</h3>
            </div>
            <div className={styles['color-hex']}>
              <p>HEX #FFFFFF</p>
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
