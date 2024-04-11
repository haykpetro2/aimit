import React, { useCallback, useRef, useState } from 'react';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();

    const [changeToVideo, setChangeToVideo] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const sensorRef = useRef(null);
    const titleRef = useRef(null);

    const handleBackClick = () => {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleVisible = useCallback(
      (isVisible) => {
        if (!isVisible) {
          setChangeToVideo(false);
          setShowVideo(false);
          sensorRef.current.pause();
        }
      },
      [sensorRef.current]
    );

    const height = sensorRef?.current?.height;

    const handleToggleVideo = (videoState) => {
      if (videoState === 'play') {
        sensorRef.current.play();
      } else {
        sensorRef.current.pause();
      }
    };

    const isVideoVisible = () => {
      setChangeToVideo((prev) => !prev);
      setShowVideo(true);
      handleBackClick();

      if (!changeToVideo) {
        handleToggleVideo('play');
      } else {
        handleToggleVideo('pause');
      }
    };

    return (
      <View
        {...props}
        setChangeToVideo={setChangeToVideo}
        isVideoVisible={isVideoVisible}
        handleVisible={handleVisible}
        sensorRef={sensorRef}
        height={height}
        titleRef={titleRef}
        showVideo={showVideo}
        changeToVideo={changeToVideo}
        t={t}
      />
    );
  };

  return Result;
};
