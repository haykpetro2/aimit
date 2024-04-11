import React from 'react';
import PropTypes from 'prop-types';
import { davPolyclinicProjectList } from './Constants/constants';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  return (
    <section className={styles['about-section']}>
      <div className={styles.container}>
        <div className={styles['about-descriptions']}>
          <div className={`section-heading ${styles['section-heading']}`}>
            <h2>{t('davPolAbout')}</h2>
          </div>
          <div className={`description ${styles['section-description']}`}>
            <p>{t('caseStudiesDescDav')}</p>
          </div>
        </div>

        <div className={styles['about-section_mainpanel']}>
          <div className={styles['about-widgets']}>
            {davPolyclinicProjectList.map(({ id, title, description, Icon }) => (
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
