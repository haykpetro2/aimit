import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { MoulkCrmProjectList } from './Constants/constants';

export const View = ({ t }) => {
  return (
    <section className={styles['technologies-section']}>
      <div className="container">
        <div className={styles['section-mainpanel']}>
          <div className={styles['product-information-items']}>
            {MoulkCrmProjectList.map(({ id, title, description }) => (
              <div key={id} className={styles['information-item-overlay']}>
                <div className={styles['information-item']}>
                  <div className={styles['item-name']}>
                    <h3>{t(title)}</h3>
                  </div>
                  <div className={styles['item-config']}>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['technologies-panel-overlay']}>
        <div className={styles['technologies-panel']}>
          <div className={styles['technologies-headline']}>
            <h3>{t('technologies')}</h3>
          </div>
          <div className={styles['technologies-name']}>
            <p>React JS</p>
            <p>
              Node <span>JS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
