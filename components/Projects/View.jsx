import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SuccessImage1 from '../../public/images/uploads/design_success1.png';
import { projectList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ title, t }) => {
  return (
    <section className={styles['designSuccess-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className={styles['designSuccess-section_mainpanel']}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            className={`button-styles ${styles['case-studies-swipe']}`}
            navigation={{
              prevEl: '.designsuccess-prev',
              nextEl: '.designsuccess-next',
            }}
          >
            {projectList.map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles['success-items']}>
                    {project.map(({ id, title, description, routName, color }) => {
                      return (
                        <div key={id} className="col_">
                          <div
                            className={`${styles['success-item']} ${styles[`colored-${color}`]}`}
                          >
                            <div className={styles['success-item-infos']}>
                              <div className={styles['success-item-name']}>
                                <h3>{title}</h3>
                              </div>
                              <div className={styles['success-item-description']}>
                                <p>{t(description)}</p>
                              </div>
                              <div className={styles['success-item-link']}>
                                <Link href={routName}>
                                  <a>Learn more</a>
                                </Link>
                              </div>
                            </div>
                            <div className={styles['sucess-item-image']}>
                              <Image src={SuccessImage1} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
            <div className={`swiper-buttons-overlay ${styles['case-studies-buttons-overlay']}`}>
              <div className="swiper-button-custom-prev designsuccess-prev swiper-button-custom" />
              <div className="swiper-button-custom-next designsuccess-next swiper-button-custom" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string,
};
