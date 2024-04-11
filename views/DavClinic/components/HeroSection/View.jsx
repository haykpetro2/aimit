import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie-player';
import Image from 'next/image';
import lottie from 'lottie-web';
import styles from './style.module.scss';
import { isClient } from '../../../../config/helpers';
import ampuls from '../../../../jsons/ampuls.json';
import microbiology from '../../../../jsons/microbiology.json';
import genetical from '../../../../jsons/genetical.json';
import pathology from '../../../../jsons/pathology.json';
import home from '../../../../jsons/home.json';
import animal from '../../../../jsons/animal.json';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const View = ({ t }) => {
  const [style, setStyle] = useState(true);
  const handleClick = (e) => {
    setStyle(!style);
    const top = e.clientY;
    const left = e.clientX;
    if (isClient()) {
      const davclinicCircle = document.createElement('div');
      const parent = document.getElementById('section-main');
      const bodyTop = window.scrollY;
      davclinicCircle.className = 'davClinic-circle';
      davclinicCircle.style.left = `${left - 110}px`;
      davclinicCircle.style.top = `${top - 110 + bodyTop}px`;
      parent.append(davclinicCircle);

      const davclinicCircles = parent.querySelectorAll('.davClinic-circle');

      for (let i = 0; i < davclinicCircles.length; i++) {
        if (i % 2) {
          davclinicCircle.classList.add('small');
        } else {
          davclinicCircle.classList.remove('small');
        }
      }
      setTimeout(() => {
        davclinicCircle.classList.add('view');
      });
    }
  };
  const isTablet = useMediaQuery(SCREENS.isTablet);
  return (
    <section id="section-main" onClick={handleClick} className={styles['hero-section']}>
      <div className="container">
        <div className={styles['hero-section-mainpanel']}>
          <div className={`${styles['davClinic-circle']} ${styles['right-top']}`} />
          <div className={`${styles['davClinic-circle']} ${styles['right-bottom']}`} />
          <div className={`${styles['davClinic-circle']} ${styles['left-top']}`} />
          <div className={`${styles['davClinic-circle']} ${styles['left-bottom']}`} />
          <div className={styles['hero-headline']}>
            <h1>{t('davLaboratoties')}</h1>
          </div>
          <div className={styles['hero-description']}>
            <p>{t('designDev')}</p>
          </div>
          {!isTablet && (
            <div className={styles['main-inner-overlay']}>
              <div className={styles['main-inner']}>
                <div className={styles['laptop-headline']}>
                  <Image src="/images/uploads/davclinic-laptop.png" layout="fill" />
                </div>
                <div className={styles['laptop-footer']}>
                  <div className={styles['laptop-footer-heading']}>
                    <h4>Our services</h4>
                  </div>
                  <div className={styles['laptop-footer-main']}>
                    <div className="col_">
                      <div className={styles['footer-item']}>
                        <div className={styles['footer-item-icon']}>
                          <Lottie
                            loop
                            speed={1}
                            animationData={ampuls}
                            style={{ width: 80, height: 80 }}
                          />
                        </div>
                        <div className={styles['footer-icon-name']}>
                          <p>General Clinical, Biochemical, Immunological, Coagulogram</p>
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles['footer-item']}>
                        <div className={styles['footer-item-icon']}>
                          <Lottie
                            loop
                            speed={1}
                            animationData={microbiology}
                            style={{ width: 80, height: 80 }}
                          />
                        </div>
                        <div className={styles['footer-icon-name']}>
                          <p>Microbiological, Parasitological</p>
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles['footer-item']}>
                        <div className={styles['footer-item-icon']}>
                          <Lottie
                            loop
                            speed={1}
                            animationData={genetical}
                            style={{ width: 80, height: 80 }}
                          />
                        </div>
                        <div className={styles['footer-icon-name']}>
                          <p>PCR, Genetic researches</p>
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles['footer-item']}>
                        <div className={styles['footer-item-icon']}>
                          <Lottie
                            loop
                            speed={1}
                            animationData={pathology}
                            style={{ width: 80, height: 80 }}
                          />
                        </div>
                        <div className={styles['footer-icon-name']}>
                          <p>Pathology, Histological, Immunohistochemical, Cytological</p>
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles['footer-item']}>
                        <div className={styles['footer-item-icon']}>
                          <Lottie
                            loop
                            speed={1}
                            animationData={home}
                            style={{ width: 80, height: 80 }}
                          />
                        </div>
                        <div className={styles['footer-icon-name']}>
                          <p>House Call</p>
                        </div>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles['footer-item']}>
                        <div className={styles['footer-item-icon']}>
                          <Lottie
                            loop
                            speed={1}
                            animationData={animal}
                            style={{ width: 80, height: 80 }}
                          />
                        </div>
                        <div className={styles['footer-icon-name']}>
                          <p>Animal analyses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['main-service']}>
                  <div className={styles['footer-item']}>
                    <div
                      onMouseEnter={() => lottie.play()}
                      onMouseLeave={() => lottie.pause()}
                      className={styles['footer-item-icon']}
                    >
                      <Lottie
                        loop
                        speed={1}
                        animationData={ampuls}
                        style={{ width: 150, height: 150 }}
                      />
                    </div>
                    <div className={styles['footer-icon-name']}>
                      <p>General Clinical, Biochemical, Immunological, Coagulogram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
