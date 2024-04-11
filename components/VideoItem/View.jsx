import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './style.module.scss';

export const View = ({
  t,
  isPlaying,
  handleToggleVideo,
  video_url,
  id,
  videoIcon,
  showImage,
  setShowImage,
}) => {
  return (
    <div className={`${styles['video-overlay']} ${styles.heroVideo}`}>
      {showImage && (
        <div className={styles['video-thumbnail']}>
          <Image src={videoIcon} layout="fill" />
        </div>
      )}

      <video className="feed" id={id} controls={false}>
        <track src={video_url} kind="captions" srcLang="en" label="english_captions" />
        <source src={video_url} type="video/mp4" />
      </video>
      <div className={`${styles.video_buttons}`}>
        {!isPlaying ? (
          <button
            className={styles.video_play}
            type="button"
            onClick={() => {
              handleToggleVideo('play', id);
              setShowImage(false);
            }}
          >
            {t('play')}
          </button>
        ) : (
          <button
            className={styles.video_pause}
            type="button"
            onClick={() => handleToggleVideo('pause', id)}
          >
            {t('pause')}
          </button>
        )}
      </div>
    </div>
  );
};

View.propTypes = {
  isPlaying: PropTypes.bool,
  handleToggleVideo: PropTypes.func,
  t: PropTypes.func,
  video_url: PropTypes.string,
  videoIcon: PropTypes.string,
  id: PropTypes.number,
  showImage: PropTypes.bool,
  setShowImage: PropTypes.func,
};
