import React from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import { MallsTypographyList } from './Constants/constants';

import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['typography-section']}>
      <div className="container">
        <div className={styles['typography-section_mainpanel']}>
          <div className={styles['font-variants']}>
            <div className={`section-heading ${styles['variant-heading']}`}>
              <h3>Font</h3>
            </div>
            <ul>
              {MallsTypographyList.map(({ id, title }) => {
                return <li key={id}>{t(title)}</li>;
              })}
            </ul>
          </div>
          <div className={styles['color-variants']}>
            <div className={`section-heading ${styles['variant-heading']}`}>
              <h3>Colors</h3>
            </div>
            <ul>
              <li className="col_">
                <Tilt
                  scale={1.1}
                  tiltEnable={false}
                  glareEnable
                  glareMaxOpacity={0.8}
                  glareColor="white"
                  glarePosition="bottom"
                >
                  <div className={`${styles['color-variant']} ${styles.dark}`} />
                </Tilt>
                <div className={`${styles['color-name']}`}>
                  <p>#212121</p>
                </div>
              </li>
              <li className="col_">
                <Tilt
                  scale={1.1}
                  tiltEnable={false}
                  glareEnable
                  glareMaxOpacity={0.8}
                  glareColor="black"
                  glarePosition="bottom"
                >
                  <div className={`${styles['color-variant']}  ${styles.light} `} />
                </Tilt>
                <div className={`${styles['color-name']}`}>
                  <p>#F5F5F5</p>
                </div>
              </li>
              <li className="col_">
                <Tilt
                  scale={1.1}
                  tiltEnable={false}
                  glareEnable
                  glareMaxOpacity={0.8}
                  glareColor="white"
                  glarePosition="bottom"
                >
                  <div className={`${styles['color-variant']} ${styles.blue}`} />
                </Tilt>
                <div className={`${styles['color-name']}`}>
                  <p>#1C67FF</p>
                </div>
              </li>
              <li className="col_">
                <Tilt
                  scale={1.1}
                  tiltEnable={false}
                  glareEnable
                  glareMaxOpacity={0.8}
                  glareColor="white"
                  glarePosition="bottom"
                >
                  <div className={`${styles['color-variant']} ${styles.gray}`} />
                </Tilt>
                <div className={`${styles['color-name']}`}>
                  <p>#909090</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
