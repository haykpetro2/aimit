import React, { useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube } from 'swiper';
import Link from 'next/link';
import PrimaryButton from '../../../../components/PrimaryButton';
import FormModal from '../../../../components/GetInTouch/Components/FormModal';
import VideoItem from '../../../../components/VideoItem';
import styles from './style.module.scss';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/effect-cube';

import 'swiper/css/autoplay';
import ArrowCaseStudies from '../../../../svgs/ArrowCaseStudies';

export const View = ({
  changeToVideo,
  handleVisible,
  sensorRef,
  height,
  isPlaying,
  handleToggleVideo,
  isOpen,
  toggleModal,
  t,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="homeVideo" className={styles['hero-section']}>
      <div className="container">
        <VisibilitySensor onChange={handleVisible} offset={{ top: -height }} partialVisibility>
          <div className={styles.heroVideo}>
            {changeToVideo && (
              <VideoItem
                isPlaying={isPlaying}
                sensorRef={sensorRef}
                handleToggleVideo={handleToggleVideo}
              />
            )}
          </div>
        </VisibilitySensor>
        <div className={styles['hero-section_mainpanel']}>
          <div className={`col_ ${styles['hero-description_overlay']}`}>
            <div className="section-heading">
              <h1>{t('rocketFuel')}</h1>
            </div>
            <div className={`description ${styles['hero-description_text']}`}>
              <p>{/* <Trans t={t}>{t('videoText')}</Trans> */}</p>
            </div>
            <div className={styles.hero_button}>
              <PrimaryButton text={t('getInTouch')} onClick={toggleModal} />
            </div>
          </div>
          <div className={` ${styles['hero-right-side']}`}>
            {!changeToVideo && (
              <Swiper
                effect="cube"
                cubeEffect={{
                  shadow: false,
                  slideShadows: false,
                }}
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                  },
                }}
                speed={3000}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCube]}
                className={styles['cube-swipe']}
              >
                <SwiperSlide>
                  <Link className={styles['case-study-link']} href="/dav-polyclinics/">
                    <a>
                      <div className={styles['hero-image_overlay']}>
                        <div className={styles['hero-image']}>
                          <Image
                            className="case-study-image"
                            priority
                            layout="fill"
                            src="/images/uploads/home_case_study1.png"
                            alt="Picture of the author"
                          />
                          <div className={styles.circle}>
                            <div className={styles.circle__item}>
                              <svg viewBox="0 0 50 50" className={styles.circle__spinner}>
                                <circle
                                  className={styles.path}
                                  cx="25"
                                  cy="25"
                                  r="20"
                                  fill="none"
                                  stroke="#ffffff80"
                                  strokeDasharray="130"
                                  strokeWidth="10"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className={styles['hero-play_btn']}>
                          <div className={styles['arrow-right']}>
                            <ArrowCaseStudies />
                          </div>
                          <div className={styles.playText}>
                            <p>{t('Case study')}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className={styles['case-study-link']} href="/moulk-crm/">
                    <a>
                      <div className={styles['hero-image_overlay']}>
                        <div className={styles['hero-image']}>
                          <Image
                            className="case-study-image"
                            priority
                            layout="fill"
                            src="/images/uploads/home_case_study2.png"
                            alt="Picture of the author"
                          />
                          <div className={styles.circle}>
                            <div className={styles.circle__item}>
                              <svg viewBox="0 0 50 50" className={styles.circle__spinner}>
                                <circle
                                  className={styles.path}
                                  cx="25"
                                  cy="25"
                                  r="20"
                                  fill="none"
                                  stroke="#ffffff80"
                                  strokeDasharray="130"
                                  strokeWidth="10"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className={styles['hero-play_btn']}>
                          <div className={styles['arrow-right']}>
                            <ArrowCaseStudies />
                          </div>
                          <div className={styles.playText}>
                            <p>{t('Case study')}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className={styles['case-study-link']} href="/malls/">
                    <a>
                      <div className={styles['hero-image_overlay']}>
                        <div className={styles['hero-image']}>
                          <Image
                            className="case-study-image"
                            priority
                            layout="fill"
                            src="/images/uploads/home_case_study3.png"
                            alt="Picture of the author"
                          />
                          <div className={styles.circle}>
                            <div className={styles.circle__item}>
                              <svg viewBox="0 0 50 50" className={styles.circle__spinner}>
                                <circle
                                  className={styles.path}
                                  cx="25"
                                  cy="25"
                                  r="20"
                                  fill="none"
                                  stroke="#ffffff80"
                                  strokeDasharray="130"
                                  strokeWidth="10"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className={styles['hero-play_btn']}>
                          <div className={styles['arrow-right']}>
                            <ArrowCaseStudies />
                          </div>
                          <div className={styles.playText}>
                            <p>{t('Case study')}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link className={styles['case-study-link']} href="/moulk-delivery/">
                    <a>
                      <div className={styles['hero-image_overlay']}>
                        <div className={styles['hero-image']}>
                          <Image
                            className="case-study-image"
                            priority
                            layout="fill"
                            src="/images/uploads/home_case_study4.png"
                            alt="Picture of the author"
                          />
                          <div className={styles.circle}>
                            <div className={styles.circle__item}>
                              <svg viewBox="0 0 50 50" className={styles.circle__spinner}>
                                <circle
                                  className={styles.path}
                                  cx="25"
                                  cy="25"
                                  r="20"
                                  fill="none"
                                  stroke="#ffffff80"
                                  strokeDasharray="130"
                                  strokeWidth="10"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className={styles['hero-play_btn']}>
                          <div className={styles['arrow-right']}>
                            <ArrowCaseStudies />
                          </div>
                          <div className={styles.playText}>
                            <p>{t('Case study')}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
        <FormModal isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </section>
  );
};

View.propTypes = {
  changeToVideo: PropTypes.bool,
  isVideoVisible: PropTypes.func,
  handleVisible: PropTypes.func,
  sensorRef: PropTypes.object,
  height: PropTypes.number,
  isPlaying: PropTypes.bool,
  handleToggleVideo: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  t: PropTypes.func,
};
