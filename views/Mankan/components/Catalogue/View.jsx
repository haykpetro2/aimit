import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import Catalogue from '../../../../public/images/uploads/mankan_catalogue.png';

import styles from './style.module.scss';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const View = ({ t }) => {
  const isMobile = useMediaQuery(SCREENS.isMobile);

  const scale = 0.7;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={styles['catalogue-section']}>
      <div className={styles['catalogue-section-mainpanel']}>
        <div className="container">
          <div className={`section-heading ${styles['section-headline']}`}>
            <h3>{t('catalogue')}</h3>
          </div>
          <Tilt tiltEnable={!isMobile} scale={scale} transitionSpeed={2500}>
            <div data-aos="zoom-in-up" className={styles['catalogue-image']}>
              <Image layout="fill" src={Catalogue} />
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
