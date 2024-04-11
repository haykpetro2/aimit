import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import styles from './style.module.scss';

import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const View = ({ t }) => {
  const isMobile = useMediaQuery(SCREENS.isMobile);
  const scale = 0.9;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['architecture-section']}>
      <div className="container">
        <div className={`section - heading ${styles['section-heading']}`}>
          <h2>{t('uiLibrary')}</h2>
        </div>

        <div className={styles['architecture-section_mainpanel']}>
          <Tilt tiltEnable={!isMobile} scale={scale} transitionSpeed={2500}>
            <div data-aos="zoom-in" className={styles['architecture-image']}>
              <Image src="/images/uploads/Library.png" layout="fill" />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
