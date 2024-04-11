import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { DavClinicProjectList } from './Constants/constants';

export const View = ({ t }) => {
  return (
    <section id="section-about" className={styles['about-section']}>
      <div className="container">
        <div className={styles['about-descriptions']}>
          <div className="section-heading">
            <h2>{t('devAboutProject')}</h2>
          </div>
          <div className={`description ${styles['section-description']}`}>
            <p>{t('caseStudiesDescPolyclinic')}</p>
          </div>
        </div>

        <div className={styles['about-section_mainpanel']}>
          <div className={styles['about-widgets']}>
            {DavClinicProjectList.map(({ id, title, description, Icon }) => (
              <div key={id} className={`col_ ${styles['widget-overlay']}`}>
                <div className={styles['about-widget']}>
                  <div className={styles['widget-infos']}>
                    <div className={styles['wiget-name']}>
                      <p>{t(title)}</p>
                    </div>
                    <div className={styles['widget-subInfo']}>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className={styles['widget-icon']}>
                    <Icon />
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
