import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import VideoItem from '../VideoItem';

export const View = ({
  t,
  toggleModal,
  id,
  image,
  description,
  director,
  directorName,
  video_url,
  textRef,
  isVideo,
  viewMore,
  showMobileText,
  mobileText,
  isMobile,
  isPlaying,
  handleToggleVideo,
  videoIcon,
}) => {
  return (
    <div key={id} className={styles.feedback_item}>
      {isMobile && (
        <div className={`${styles.feedback_description} ${styles.mobileVisible}`}>
          <div className={`description ${styles['description-overlay']}`}>
            <p ref={textRef} className={mobileText ? styles['main-text'] : ''}>
              {t(description)}
            </p>
            {viewMore && (
              <span role="presentation" className={styles['more-button']} onClick={showMobileText}>
                {mobileText ? 'View more' : 'View less'}
              </span>
            )}
          </div>
        </div>
      )}
      <div className={styles.feedbacItem_video}>
        <div className={styles.feedbacItemVideo_overlay}>
          {isVideo ? (
            <div className={styles.feedbackVideoWapper}>
              {video_url && (
                <VideoItem
                  id={id}
                  isPlaying={isPlaying}
                  handleToggleVideo={handleToggleVideo}
                  video_url={video_url}
                  videoIcon={videoIcon}
                />
              )}
            </div>
          ) : (
            <Image layout="fill" src={video_url} />
          )}
        </div>
      </div>
      {!isMobile && (
        <div className={`${styles.feedbackItem_infos} ${styles.desktopVisible}`}>
          <div className={styles.feedbackItemInfos_headline}>
            <div className={styles.feedbackItem_author}>
              <div className={styles.feebackAuthor_image}>
                <Image layout="fill" src={image} />
              </div>
              <div className={styles.feedBackAuthor_infos}>
                <h3 className={styles.feedBackAuthor_name}>{t(directorName)}</h3>
                <p className={styles.feedBackAuthor_position}>{t(director)}</p>
              </div>
            </div>
            <div className={styles.feedBack_stars}>
              <span className={styles.star} />
              <span className={styles.star} />
              <span className={styles.star} />
              <span className={styles.star} />
              <span className={styles.star} />
            </div>
          </div>
          <div className={styles.feedback_description}>
            <div className={`description ${styles['description-overlay']}`}>
              <p ref={textRef} className={styles['main-text']}>
                {t(description)}
              </p>
              {viewMore && (
                <span
                  role="presentation"
                  className={styles['more-button']}
                  onClick={(e) => {
                    toggleModal(e, id);
                  }}
                >
                  View more
                </span>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={`${styles.feedbackItem_infos} ${styles.mobileVisible}`}>
        <div className={styles.feedbackItemInfos_headline}>
          <div className={styles.feedbackItem_author}>
            <div className={styles.feebackAuthor_image}>
              <Image layout="fill" src={image} />
            </div>
            <div className={styles.feedBackAuthor_infos}>
              <h3 className={styles.feedBackAuthor_name}>{t(directorName)}</h3>
              <p className={styles.feedBackAuthor_position}>{t(director)}</p>
            </div>
          </div>
          <div className={styles.feedBack_stars}>
            <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.star} />
            <span className={styles.star} />
          </div>
        </div>
      </div>
    </div>
  );
};

View.propTypes = {
  t: PropTypes.func,
  toggleModal: PropTypes.func,
  id: PropTypes.number,
  description: PropTypes.string,
  director: PropTypes.string,
  directorName: PropTypes.string,
  image: PropTypes.string,
  videoIcon: PropTypes.string,
  video_url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  textRef: PropTypes.object,
  isVideo: PropTypes.bool,
  viewMore: PropTypes.bool,
  mobileText: PropTypes.bool,
  isMobile: PropTypes.bool,
  isPlaying: PropTypes.bool,
  showMobileText: PropTypes.func,
  handleToggleVideo: PropTypes.func,
};
