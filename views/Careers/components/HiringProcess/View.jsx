import React from 'react';
import PropTypes from 'prop-types';
import { hiringProcessList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['hiring-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('hiringProcess')}</h2>
        </div>
      </div>
      <div className={styles['hiring-section-mainpanel']}>
        <div className="container">
          <div className={styles['hiring-section-widgets']}>
            {hiringProcessList.map(({ id, title, description1, description2, description3 }) => (
              <div key={id} className={`col_ ${styles['hiring-widget-overlay']}`}>
                <div className={styles['hiring-widget']}>
                  <div className={styles['hiring-item-numbering']}>{id}</div>
                  <div className={styles['hiring-section-name']}>
                    <h3>{t(title)}</h3>
                  </div>
                  <div className={styles['hiring-section-list']}>
                    <ul>
                      <li>{t(description1)}</li>
                      <li>{t(description2)}</li>
                      <li>{t(description3)}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
