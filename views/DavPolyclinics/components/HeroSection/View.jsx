import React from 'react';
import Image from 'next/future/image';
import PropTypes from 'prop-types';
import DarkImage from '../../../../public/images/uploads/dark_clinic.png';
import DarkImageMobile from '../../../../public/images/uploads/dark_clinic_mobile.png';
import LightImage from '../../../../public/images/uploads/light_clinic.png';
import LightImageMobile from '../../../../public/images/uploads/light_clinic_mobile.png';
import BottomImage from '../../../../public/images/uploads/polyclinic_bottom.png';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = ({ contentRef, switcher, switcherMobile, isMobile }) => {
  const { t } = useTranslations();
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-section-overlay']}>
        <div className="container">
          <div className={`section-heading ${styles['hero-headlie']}`}>
            <h1>{t('davidyantsPolyclinics')}</h1>
          </div>
          <div className={styles['hero-button']}>
            <button type="button">Design+Development</button>
          </div>
          <div className={styles['hero-section-mainpanel']}>
            <div
              ref={contentRef}
              onTouchMove={(e) => switcherMobile(e)}
              onMouseMove={(e) => switcher(e)}
              className={styles['color-switcher']}
            >
              <div className={styles['images-overlay']}>
                <div className={styles['dark-image']}>
                  {!isMobile ? (
                    <Image alt="Screen" layout="fill" src={LightImage} />
                  ) : (
                    <Image alt="Screen" layout="fill" src={LightImageMobile} />
                  )}
                </div>
                <div id="lightImage" className={styles['light-image']}>
                  {!isMobile ? (
                    <Image src={DarkImage} alt="Screen" />
                  ) : (
                    <Image src={DarkImageMobile} alt="Screen" />
                  )}
                </div>
              </div>
              <div className={styles.switcher} id="switcher" />
            </div>
            <div className={styles['polyclinics-bottom-image']}>
              <Image alt="Screen" src={BottomImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  switcher: PropTypes.func,
  switcherMobile: PropTypes.func,
  t: PropTypes.func,
  contentRef: PropTypes.object,
  isMobile: PropTypes.bool,
};
