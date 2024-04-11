import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import styles from './style.module.scss';
import CaseStudeies from '../../../../../components/CaseStudies';

export const View = () => {
  const variants = ['ui /ux', 'IOS', 'android', 'node js', 'DELIVERY APP'];
  return (
    <section className={styles['caseStudies-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>Case studies</h2>
        </div>
        <div className={styles['caseStudies-section_mainpanel']}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className={`button-styles ${styles['case-studies-swipe']}`}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: '.casestudies-prev',
              nextEl: '.casestudies-next',
            }}
          >
            <SwiperSlide>
              <div className={styles.caseStudiItems}>
                <CaseStudeies
                  title="Case studies"
                  variants={variants}
                  description="The FinTech industry will excide $320 bln in 5 years. Consider the experienced tech partner to develop disruptively financial products to skyrocket your business. Our team has extensive expertise in digital banking solutions, blockchain, financial data management, payment security, and predictive analytics."
                />
                <CaseStudeies
                  title="Case studies"
                  variants={variants}
                  description="The FinTech industry will excide $320 bln in 5 years. Consider the experienced tech partner to develop disruptively financial products to skyrocket your business. Our team has extensive expertise in digital banking solutions, blockchain, financial data management, payment security, and predictive analytics."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.caseStudiItems}>
                <CaseStudeies
                  title="Case studies"
                  variants={variants}
                  description="The FinTech industry will excide $320 bln in 5 years. Consider the experienced tech partner to develop disruptively financial products to skyrocket your business. Our team has extensive expertise in digital banking solutions, blockchain, financial data management, payment security, and predictive analytics."
                />
                <CaseStudeies
                  title="Case studies"
                  variants={variants}
                  description="The FinTech industry will excide $320 bln in 5 years. Consider the experienced tech partner to develop disruptively financial products to skyrocket your business. Our team has extensive expertise in digital banking solutions, blockchain, financial data management, payment security, and predictive analytics."
                />
              </div>
            </SwiperSlide>

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
