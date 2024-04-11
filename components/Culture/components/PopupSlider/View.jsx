import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styles from './style.module.scss';

export const View = ({
  isOpen,
  toggleModal,
  swiperData,
  handleChangeOffset = () => {},
  handleVideoStop,
}) => {
  return (
    isOpen && (
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        className={styles['culture-modal']}
        style={{
          overlay: {
            backgroundColor: 'rgb(26, 32, 40)',
          },
          content: {
            background: 'rgb(26, 32, 40)',
            padding: '60px 20px 20px 20px',
            border: 'none',
          },
        }}
      >
        <div onClick={() => toggleModal()} className={styles['close-modal']} />
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
            onActiveIndexChange={(e) => {
              handleChangeOffset(e.activeIndex);
              handleVideoStop();
            }}
          >
            {swiperData?.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className={styles['modal-image']}>
                    {element.media_type === 'VIDEO' ? (
                      <video
                        className="vid"
                        width="10"
                        height="20"
                        src={element.media_url}
                        type="video/mp4"
                        controls
                        playsInline
                      >
                        <track
                          src={element.media_url}
                          kind="captions"
                          srcLang="en"
                          label="english_captions"
                        />
                      </video>
                    ) : (
                      <div className={styles.imageWrapper}>
                        <Image
                          src={element.media_url}
                          alt="Swiper"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
            <div className={`swiper-pagination ${styles['modal-pagination']}`} />
          </Swiper>
        </div>
      </Modal>
    )
  );
};

View.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  handleChangeOffset: PropTypes.func,
  handleVideoStop: PropTypes.func,
  swiperData: PropTypes.array,
};
