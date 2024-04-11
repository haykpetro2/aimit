import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation, Grid } from 'swiper';
import PropTypes from 'prop-types';
import 'swiper/css/grid';
import CaseStudies from '../../../../components/CaseStudies';
import styles from './style.module.scss';

export const View = ({ t, handleCaseStudiesList, pathname, title }) => {
  return (
    <section className={styles['caseStudies-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{title || 'Case Studies'}</h2>
        </div>
        <div className={styles['caseStudies-section_mainpanel']}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            grid={{
              rows: 2,
              fill: 'row',
            }}
            modules={[Pagination, Navigation, Grid]}
            className={`button-styles ${styles['case-studies-swipe']}`}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.casestudies-prev',
              nextEl: '.casestudies-next',
            }}
          >
            {handleCaseStudiesList(pathname)?.map(
              ({ id, title, variants, description, routName, image }) => (
                <SwiperSlide key={id}>
                  <div className={styles.caseStudiItems}>
                    <CaseStudies
                      id={id}
                      title={t(title)}
                      variants={variants}
                      description={t(description)}
                      routName={routName}
                      image={image}
                    />
                  </div>
                </SwiperSlide>
              )
            )}
            <div className={`swiper-buttons-overlay ${styles['case-studies-buttons-overlay']}`}>
              <div className="swiper-button-custom-prev casestudies-prev swiper-button-custom" />
              <div className="swiper-button-custom-next casestudies-next swiper-button-custom" />
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
  handleCaseStudiesList: PropTypes.func,
  pathname: PropTypes.string,
};
