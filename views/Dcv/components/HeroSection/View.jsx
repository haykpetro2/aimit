import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './style.module.scss';

export const View = ({
  handleVisible,
  sensorRef,
  height,
  titleRef,
  isVideoVisible,
  showVideo,
  changeToVideo,
}) => {
  return (
    <section className={styles['hero-section']} ref={titleRef}>
      <VisibilitySensor onChange={handleVisible} offset={{ top: -height }} partialVisibility>
        <div className={styles['hero-section-mainpanel']}>
          <div className={styles['hero-headline']}>
            <h1>
              <span>L</span>
              <span>O</span>
              <span>O</span>
              <span>K</span>
              <span>I</span>
              <span>N</span>
              <span>G &#32;</span>
              <span>F</span>
              <span>O</span>
              <span>R &#32; </span>
              <span>A &#32; </span>
              <span>J</span>
              <span>O</span>
              <span>B?</span>
            </h1>
          </div>
          <div className={styles['cv-player']}>
            <div
              className={`${styles['video-cover']} ${showVideo ? styles['video-opened'] : ''}`}
            />
            <div className={styles.video}>
              <div>
                <video ref={sensorRef} width="300" height="300" controls={false}>
                  <track
                    src="/videos/davPolycVideo.mp4"
                    kind="captions"
                    srcLang="en"
                    label="english_captions"
                  />
                  <source src="/videos/davPolycVideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {changeToVideo ? (
              <button
                onClick={isVideoVisible}
                type="button"
                aria-label="pause"
                className={`${styles['toggle-video']} ${styles['play-video']}`}
              />
            ) : (
              <button
                onClick={isVideoVisible}
                type="button"
                aria-label="player"
                className={styles['toggle-video']}
              />
            )}
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
};

View.propTypes = {
  changeToVideo: PropTypes.bool,
  showVideo: PropTypes.bool,
  isVideoVisible: PropTypes.func,
  handleVisible: PropTypes.func,
  sensorRef: PropTypes.object,
  height: PropTypes.number,
  titleRef: PropTypes.object,
  handleToggleVideo: PropTypes.func,
};
