import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import AOS from 'aos';
import Tilt from 'react-parallax-tilt';
import ProductCard from '../../../../public/images/uploads/mankan_product_card.png';

import 'aos/dist/aos.css';
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
          <div className="section-heading">
            <h3>{t('productCard')}</h3>
          </div>
          <Tilt tiltEnable={!isMobile} scale={scale} transitionSpeed={2500}>
            <div data-aos="zoom-in-up" className={styles['catalogue-image']}>
              <Image layout="fill" src={ProductCard} />
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
