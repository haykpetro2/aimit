import React, { useState } from 'react';
import Image from 'next/image';

import styles from './style.module.scss';
import LaboratoryIcon from '../../../../svgs/LaboratoryIcon';
import SpecilizedIcon from '../../../../svgs/SpecilizedIcon';

export const View = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <section className={styles['services-section']}>
      <div className={styles.container}>
        <div className={styles['services-mainpanel']} onMouseMove={handleShow}>
          <div className={styles['left-side']}>
            <div className={styles['informative-panel']}>
              <div className={`${styles['info-panel']} ${styles[show ? 'info-panel-one' : '']}`}>
                <p>Microbial</p>
              </div>
              <div className={`${styles['info-panel']} ${styles[show ? 'info-panel-two' : ' ']}`}>
                <p>Genetic</p>
              </div>
              <div className={`${styles['info-panel']} ${styles[show ? 'info-panel-three' : ' ']}`}>
                <p>Biochemical</p>
              </div>
              <div className={`${styles['info-panel']} ${styles[show ? 'info-panel-four' : ' ']}`}>
                <p>Immunological</p>
              </div>

              <div className={styles['panel-headline']}>
                <div className={styles['panel-icon']}>
                  <LaboratoryIcon />
                </div>
                <h3>Laboratory</h3>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className={styles['middle-image']}>
            <Image src="/images/uploads/middleimage.png" layout="fill" />
          </div>
          <div className={styles['right-image-overlay']}>
            <div className={styles['right-side']}>
              <div className={styles['informative-panel']}>
                <div className={`${styles['info-panel']} ${styles[show ? 'info-panel-one' : ' ']}`}>
                  <p>Pediatric cardiologist</p>
                </div>

                <div className={`${styles['info-panel']} ${styles[show ? 'info-panel-two' : '']}`}>
                  <p>Therapist</p>
                </div>
                <div
                  className={`${styles['info-panel']} ${styles[show ? 'info-panel-three' : ' ']}`}
                >
                  <p>Family doctor</p>
                </div>
                <div
                  className={`${styles['info-panel']} ${styles[show ? 'info-panel-four' : ' ']}`}
                >
                  <p>Immunoprevention cabinet (vaccinations)</p>
                </div>

                <div className={styles['panel-headline']}>
                  <div className={styles['panel-icon']}>
                    <SpecilizedIcon />
                  </div>
                  <h3>Specialized cabinets</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
