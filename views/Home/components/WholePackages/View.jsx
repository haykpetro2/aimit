import React from 'react';
import PropTypes from 'prop-types';
import { WholePackagesList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['wholePackage-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('wholePackage')}</h2>
        </div>
        <div className={styles.wholePackage_description}>
          <div className="description">
            <p>{/* <Trans t={t}>{t('wholePackageFirstText')}</Trans> */}</p>
          </div>
        </div>
      </div>

      <div className={styles['wholePackage-section_mainpanel']}>
        <div className="container">
          <div className={styles.wholePackageItems}>
            {WholePackagesList.map(({ id, Icon, title, description }) => (
              <div key={id} className={`col_ ${styles['wholePackage-item_overlay']}`}>
                <div className={styles['wholePackage-item']}>
                  <div className={styles['wholePackage-item_icon']}>
                    <Icon />
                  </div>
                  <div className={styles['wholePackage-item_name']}>
                    <p>{t(title)}</p>
                  </div>
                  <div className={styles['wholePackage-item_description']}>
                    <p>{t(description)}</p>
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
