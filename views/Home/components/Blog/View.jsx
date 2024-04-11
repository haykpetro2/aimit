import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import BlogItem from '../../../../components/BlogItem';
import styles from './style.module.scss';

export const View = ({ t, homeBlogData, locale }) => {
  return (
    <section className={styles['blog-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('ourBlog')}</h2>
        </div>
      </div>
      <div className="container-big">
        <div className={styles['blog-section-inner']}>
          <div className={styles['blog-section-mainpanel-overlay']}>
            <div className={styles['blog-section-mainpanel']}>
              <div className={styles['swiper-overlay']}>
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={26}
                  breakpoints={{
                    360: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                  navigation={{
                    prevEl: '.blog-prev',
                    nextEl: '.blog-next',
                  }}
                  modules={[Navigation]}
                  className={styles.blogSwipe}
                >
                  {homeBlogData ? (
                    homeBlogData.map(
                      ({
                        id,
                        [`title_${locale}`]: title,
                        title_en,
                        author_name,
                        author_image,
                        image,
                        [`category_${locale}`]: category,
                        category_en,
                        [`content_${locale}`]: content,
                        content_en,
                        updated_at,
                      }) => {
                        return (
                          <SwiperSlide key={id}>
                            <BlogItem
                              id={id}
                              title={title || title_en}
                              authorImage={author_image}
                              image={image}
                              category={category || category_en}
                              authorName={author_name}
                              date={updated_at}
                              description={content || content_en}
                            />
                          </SwiperSlide>
                        );
                      }
                    )
                  ) : (
                    <h1>Nothing found for your search </h1>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
          <div className={`swiper-buttons-overlay ${styles['blog-buttons-overlay']}`}>
            <div
              className={`swiper-button-custom-prev blog-prev ${styles['blog-prev']} swiper-button-custom`}
            />
            <div
              className={`swiper-button-custom-next blog-next ${styles['blog-next']} swiper-button-custom`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  homeBlogData: PropTypes.array,
  locale: PropTypes.string,
  t: PropTypes.func,
};
