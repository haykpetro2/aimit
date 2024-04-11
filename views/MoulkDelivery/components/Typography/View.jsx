import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import { SegoePx, SegoeUI } from './Constants/constants';
import 'aos/dist/aos.css';
import styles from './style.module.scss';

export const View = ({ t }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['typography-section']}>
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="section-heading"
        >
          <h2>{t('typography')}</h2>
        </div>

        <div className={styles['typography-section_mainpanel']}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className={styles['word-variant']}
          >
            <p>Aa</p>
          </div>
          <div className={styles['typography-listing']}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className={styles['listing-headline']}
            >
              <h3>{t('segoeUI')}</h3>
            </div>
            <ul>
              {SegoeUI.map(({ id, title }) => (
                <li data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" key={id}>
                  {t(title)}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className={styles['headlines-listing']}
          >
            <ul>
              <li>H1</li>
              <li>H2</li>
              <li>H3</li>
              <li>H4</li>
              <li>H5</li>
            </ul>
          </div>
          <div className={`${styles['headlines-listing']} ${styles['ui-listing']}`}>
            <ul>
              {SegoePx.map(({ id, title }) => (
                <li data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" key={id}>
                  {t(title)}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className={styles['section-description']}
          >
            <p>{t('textStyles')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
