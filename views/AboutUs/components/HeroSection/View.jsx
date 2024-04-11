import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.scss';

export const View = ({
  // changeToVideo,
  // isVideoVisible,
  // handleVisible,
  // sensorRef,
  // height,
  titleRef,
  // isPlaying,
  // handleToggleVideo,
  // t,
}) => {
  return (
    <section className={styles['hero-section']} ref={titleRef}>
      {/* todo */}
      {/* <div className="container"> */}
      {/* <div className="section-heading"> */}
      {/*  <h1>{t('herSectionText')}</h1> */}
      {/* </div> */}
      {/* <VisibilitySensor onChange={handleVisible} offset={{ top: -height }} partialVisibility> */}
      {/*  <div className={styles.heroVideo}> */}
      {/*    {changeToVideo && ( */}
      {/*      <VideoItem */}
      {/*        isPlaying={isPlaying} */}
      {/*        sensorRef={sensorRef} */}
      {/*        handleToggleVideo={handleToggleVideo} */}
      {/*      /> */}
      {/*    )} */}
      {/*  </div> */}
      {/* </VisibilitySensor> */}
      {/* <div className={styles['hero-section-mainpanel']}> */}
      {/* {!changeToVideo && ( */}
      {/*  <div className={styles['video-overlay']}> */}
      {/*    <div className={styles['video-thumbnail']}> */}
      {/*      <div className={`play-icon ${styles['about-play']}`} onClick={isVideoVisible} /> */}
      {/*    </div> */}
      {/*    <div className={styles['iframe-overlay']} /> */}
      {/*  </div> */}
      {/* )} */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

View.propTypes = {
  changeToVideo: PropTypes.bool,
  isVideoVisible: PropTypes.func,
  handleVisible: PropTypes.func,
  sensorRef: PropTypes.object,
  height: PropTypes.number,
  titleRef: PropTypes.object,
  isPlaying: PropTypes.bool,
  handleToggleVideo: PropTypes.func,
  t: PropTypes.func,
};
