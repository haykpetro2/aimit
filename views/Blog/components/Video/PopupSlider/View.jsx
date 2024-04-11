import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import YouTube from 'react-youtube';
import { modalStyle } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ isOpen, toggleModal, swiperData, youtubeRef, handleVideoStop }) => {
  return (
    isOpen && (
      <div>
        <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
          <div onClick={toggleModal} className={styles['close-modal']} />
          <div className={styles['swiper-overlay']}>
            <Swiper
              loop
              spaceBetween={10}
              pagination={{
                type: 'fraction',
              }}
              modules={[Navigation, Pagination]}
              navigation
              className={styles['modal-swiper']}
              onActiveIndexChange={handleVideoStop}
            >
              {swiperData?.map(({ id, youtube }) => {
                return (
                  <SwiperSlide key={id} virtualIndex={id}>
                    <div className={styles['video-iframe']}>
                      <YouTube
                        videoId={youtube}
                        onStateChange={(e) => (youtubeRef.current = e.target)}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className={`swiper-pagination ${styles['modal-pagination']}`} />
            </Swiper>
          </div>
        </Modal>
      </div>
    )
  );
};

View.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  activeImageId: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  swiperData: PropTypes.array,
  youtubeRef: PropTypes.object,
  handleVideoStop: PropTypes.func,
};
