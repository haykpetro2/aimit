import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import Tilt from 'react-parallax-tilt';
import 'aos/dist/aos.css';

import styles from './style.module.scss';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const View = ({ t }) => {
  const isMobile = useMediaQuery(SCREENS.isMobile);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['mainpage-section']}>
      <div className={styles.container}>
        <div className={`section-heading ${styles['section-heading']}`}>
          <h2>{t('mainPage')}</h2>
        </div>
        <Tilt tiltEnable={!isMobile} scale={0.8} transitionSpeed={2500}>
          <div data-aos="zoom-in-up" className={styles['top-screen']}>
            <Image layout="fill" src="/images/uploads/mainPage1.png" />
          </div>
        </Tilt>
        <Tilt tiltEnable={!isMobile} scale={0.8} transitionSpeed={2500}>
          <div data-aos="zoom-in-up" className={styles['bottom-screen']}>
            <Image layout="fill" src="/images/uploads/mainPage2.png" />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
