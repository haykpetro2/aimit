import React, { useCallback, useRef, useState } from 'react';
import { handleServiceScroll } from '../../../../config/helpers';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [changeToVideo, setChangeToVideo] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const sensorRef = useRef(null);

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
      handleServiceScroll('homeVideo');
    };

    const handleToggleVideo = (videoState) => {
      if (videoState === 'play') {
        sensorRef.current.play();
      } else {
        sensorRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    };

    const toggleModal = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <View
        {...props}
        changeToVideo={changeToVideo}
        setChangeToVideo={setChangeToVideo}
        isVideoVisible={isVideoVisible}
        handleVisible={handleVisible}
        sensorRef={sensorRef}
        height={height}
        isPlaying={isPlaying}
        handleToggleVideo={handleToggleVideo}
        isOpen={isOpen}
        toggleModal={toggleModal}
        t={t}
      />
    );
  };

  return Result;
};
