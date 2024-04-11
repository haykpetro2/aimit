import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ isTablet, animate, animation }) => {
  return (
    <section className={styles['hero-section']}>
      <div className="container-big">
        <div className={styles['hero-mainpanel']}>
          {!isTablet ? (
            <>
              <div className={styles['left-side']}>
                <div className={styles['crm-buttons']}>
                  <Image src="/images/uploads/crm-buttons.png" layout="fill" />
                </div>
                <a href="#about" className={styles['spinner-wedges']}>
                  <div>
                    <div className={styles['widges-inner']}>
                      <div>
                        <div>
                          <div />
                        </div>
                        <div>
                          <div />
                        </div>
                        <div>
                          <div />
                        </div>
                        <div>
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles['hero-main-image']}>
                <Image src="/images/uploads/hero-crm.png" layout="fill" />
              </div>
              <div className={styles['right-side']}>
                <div
                  onClick={() => animation('first')}
                  className={`${styles['button-animated']} ${animate.first ? styles.animated : ''}`}
                >
                  <div className={styles['main-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                  <div className={styles['right-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                  <div className={styles['left-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                </div>
                <div
                  onClick={() => animation('second')}
                  className={`${styles['button-animated']} ${
                    animate.second ? styles.animated : ''
                  }`}
                >
                  <div className={styles['main-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                  <div className={styles['right-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                  <div className={styles['left-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                </div>
                <div
                  onClick={() => animation('third')}
                  className={`${styles['button-animated']} ${animate.third ? styles.animated : ''}`}
                >
                  <div className={styles['main-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                  <div className={styles['right-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                  <div className={styles['left-button']}>
                    <Image src="/images/uploads/button_like.png" layout="fill" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles['tablet-version']}>
              <div className={styles['level-top']}>
                <div className={styles['crm-buttons']}>
                  <Image src="/images/uploads/crm-buttons.png" layout="fill" />
                </div>
                <div className={styles['right-side']}>
                  <div
                    onClick={() => animation('first')}
                    className={`${styles['button-animated']} ${
                      animate.first ? styles.animated : ''
                    }`}
                  >
                    <div className={styles['main-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                    <div className={styles['right-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                    <div className={styles['left-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['hero-main-image']}>
                <Image src="/images/uploads/hero-crm.png" layout="fill" />
              </div>
              <div className={styles['left-side']}>
                <div className={styles['spinner-wedges']}>
                  <div className={styles['widges-inner']}>
                    <div>
                      <div>
                        <div />
                      </div>
                      <div>
                        <div />
                      </div>
                      <div>
                        <div />
                      </div>
                      <div>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['right-side']}>
                  <div
                    onClick={() => animation('second')}
                    className={`${styles['button-animated']} ${
                      animate.second ? styles.animated : ''
                    }`}
                  >
                    <div className={styles['main-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                    <div className={styles['right-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                    <div className={styles['left-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                  </div>
                </div>
                <div className={`${styles['right-side']} ${styles.bottom}`}>
                  <div
                    onClick={() => animation('third')}
                    className={`${styles['button-animated']} ${
                      animate.third ? styles.animated : ''
                    }`}
                  >
                    <div className={styles['main-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                    <div className={styles['right-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
                    </div>
                    <div className={styles['left-button']}>
                      <Image src="/images/uploads/button_like.png" layout="fill" />
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
  isTablet: PropTypes.bool,
  animate: PropTypes.object,
  animation: PropTypes.func,
};
