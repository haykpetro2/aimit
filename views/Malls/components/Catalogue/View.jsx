import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import styles from './style.module.scss';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const View = ({ t }) => {
  const isMobile = useMediaQuery(SCREENS.isMobile);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['catalogue-section']}>
      <div className={styles.container}>
        <div className={`section-heading ${styles['section-heading']}`}>
          <h2>{t('catalogue')}</h2>
        </div>
        <Tilt tiltEnable={!isMobile} scale={0.8} transitionSpeed={2500}>
          <div data-aos="zoom-in-up" className={styles['top-screen']}>
            <Image layout="fill" src="/images/uploads/catalogue.png" />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
