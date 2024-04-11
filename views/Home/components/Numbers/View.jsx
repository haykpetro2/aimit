import React from 'react';
import PropTypes from 'prop-types';
import CheckNumbers from './Components/CheckNumbers';
import { numbersList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['numbers-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('numbers')}</h2>
        </div>
        <div className={styles['numbers-section_mainpanel']}>
          <div className={styles['number-items']}>
            {numbersList.map(({ id, title, limit }) => {
              return (
                <div key={id} className={`col_ ${styles.numbers_item_overlay}`}>
                  <div className={styles['numbers-item']}>
                    <div className={styles.number_count}>
                      <CheckNumbers limit={limit} />
                    </div>
                    <div className={styles.number_text}>
                      <p>{/* <Trans t={t}>{t(title)}</Trans> */}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
