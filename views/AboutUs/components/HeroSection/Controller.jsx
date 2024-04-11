import React, { useCallback, useRef, useState } from 'react';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [changeToVideo, setChangeToVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const sensorRef = useRef(null);
    const titleRef = useRef(null);

    const handleBackClick = () => {
      titleRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleVisible = useCallback(
      (isVisible) => {
        if (!isVisible) {
          setChangeToVideo(false);
        }
        setIsPlaying(false);
      },
      [sensorRef.current]
    );

    const height = sensorRef?.current?.height;

    const isVideoVisible = () => {
      setChangeToVideo(true);
      handleBackClick();
    };

    const handleToggleVideo = (videoState) => {
      if (videoState === 'play') {
        sensorRef.current.play();
      } else {
        sensorRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    };

    return (
      <View
        {...props}
        changeToVideo={changeToVideo}
        isVideoVisible={isVideoVisible}
        handleVisible={handleVisible}
        sensorRef={sensorRef}
        height={height}
        titleRef={titleRef}
        isPlaying={isPlaying}
        handleToggleVideo={handleToggleVideo}
        t={t}
      />
    );
  };

  return Result;
};
