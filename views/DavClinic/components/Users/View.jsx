import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DavClinicUsersList } from './Constants/constants';

import styles from './style.module.scss';

export const View = ({ t }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="section-users" className={styles['users-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('davUsers')}</h2>
        </div>
        <div className={styles['users-mainpanel']}>
          <div className={styles['mainpanel-leftSide']}>
            <div className={styles['mainpanel-headline']}>
              <h3>{t('patients')}</h3>
            </div>
            <div className={styles['mainpanel-listing']}>
              <ul>
                {DavClinicUsersList.map(({ id, description }) => (
                  <li
                    data-aos-duration={`${id} * 1000`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    key={id}
                  >
                    {t(description)}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={styles['leftSide-image']}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Image src="/images/uploads/leftSideImage.svg" layout="fill" />
            </div>
          </div>
          <div className={styles['mainpanel-rightSide']}>
            <div className={styles['mainpanel-headline']}>
              <h3>{t('patients')}</h3>
            </div>
            <div className={styles['mainpanel-listing']}>
              <ul>
                {DavClinicUsersList.map(({ id, description }) => (
                  <li
                    data-aos-duration={`${id} * 1000`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    key={id}
                  >
                    {t(description)}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={styles['rightSide-image']}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Image src="/images/uploads/rightSide.svg" layout="fill" />
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
