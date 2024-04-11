import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import FeedbackItem from '../../../../components/FeedbackItem';
import FeedbackModal from './components/FeedbackModal';
import { FeedbackList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({
  t,
  isOpen,
  toggleModal,
  activeImageId,
  textRef,
  viewMore,
  setViewMore,
  isPlaying,
  handleToggleVideo,
  handleStopVideo,
}) => {
  return (
    <section className={styles['feedback-section']}>
      <div className="container">
        <div className="section-heading">
          <h2 id="feedbackDescription">{t('feedback')}</h2>
        </div>
        <div className={styles['feedback-section_mainpanel']}>
          <Swiper
            navigation={{
              prevEl: '.feedback-prev',
              nextEl: '.feedback-next',
            }}
            modules={[Navigation]}
            className={styles.feedBack_swipe}
            onActiveIndexChange={(e) => handleStopVideo(e.realIndex)}
          >
            {FeedbackList.map(
              (
                { id, image, description, director, directorName, video_url, isVideo, videoIcon },
                index
              ) => {
                return (
                  <SwiperSlide key={id}>
                    <FeedbackItem
                      id={index}
                      image={image}
                      description={description}
                      director={director}
                      directorName={directorName}
                      video_url={video_url}
                      toggleModal={toggleModal}
                      textRef={textRef}
                      isVideo={isVideo}
                      index={index}
                      viewMore={viewMore}
                      isPlaying={isPlaying}
                      handleToggleVideo={handleToggleVideo}
                      videoIcon={videoIcon}
                    />
                  </SwiperSlide>
                );
              }
            )}
            <div className={`swiper-buttons-overlay ${styles['feedback-buttons-overlay']}`}>
              <div className="swiper-button-custom-prev feedback-prev swiper-button-custom" />
              <div className="swiper-button-custom-next feedback-next swiper-button-custom" />
            </div>
          </Swiper>
        </div>
      </div>
      <FeedbackModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        activeImageId={activeImageId}
        textRef={textRef}
        setViewMore={setViewMore}
      />
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  toggleModal: PropTypes.func,
  handleStopVideo: PropTypes.func,
  videoControl: PropTypes.func,
  isOpen: PropTypes.bool,
  activeImageId: PropTypes.number,
  textRef: PropTypes.object,
  videoOverlay: PropTypes.object,
  viewMore: PropTypes.bool,
  isPlaying: PropTypes.bool,
  setViewMore: PropTypes.func,
  handleToggleVideo: PropTypes.func,
};
