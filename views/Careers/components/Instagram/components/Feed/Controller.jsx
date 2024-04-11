import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './style.module.scss';

export const Controller = (View) => {
  const Result = ({ feed }) => {
    const { id, caption, media_type, media_url, thumbnail_url } = feed;
    let post;
    switch (media_type) {
      case 'VIDEO':
        post = (
          <div className={styles['video-overlay']}>
            <video
              poster={thumbnail_url}
              width="100"
              height="200"
              type="video/mp4"
              src={media_url}
              controls
              playsInline
            >
              <track src={media_url} kind="captions" srcLang="en" label="english_captions" />
            </video>
          </div>
        );
        break;
      case 'CAROUSEL_ALBUM':
        post = (
          <div className={styles['instagram-image']}>
            <Image id={id} src={media_url} alt={caption} layout="fill" priority="true" />
          </div>
        );
        break;
      default:
        post = (
          <div className={styles['instagram-image']}>
            <Image id={id} src={media_url} alt={caption} layout="fill" priority="true" />;
          </div>
        );
    }

    Result.propTypes = {
      feed: PropTypes.object,
    };

    return <View post={post} />;
  };

  return Result;
};
