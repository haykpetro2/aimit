import React, { useRef, useState } from 'react';
import { isClient } from '../../../../config/helpers';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [activeImageId, setActiveImageId] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const textRef = useRef(null);
    const [viewMore, setViewMore] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleVideo = (videoState, id) => {
      if (isClient()) {
        if (videoState === 'play') {
          document.getElementById(id).play();
        } else {
          document.getElementById(id).pause();
        }
        setIsPlaying((prev) => !prev);
      }
    };

    const handleStopVideo = () => {
      const arr = document.getElementsByClassName('feed');
      Array.from(arr, (item) => {
        item.currentTime = 0;
        item.pause();
      });
      setIsPlaying(false);
    };

    const toggleModal = (e, id) => {
      setIsOpen((prev) => !prev);
      if (id !== undefined) {
        setActiveImageId(id + 1);
      }
    };

    return (
      <View
        {...props}
        t={t}
        isOpen={isOpen}
        toggleModal={toggleModal}
        activeImageId={activeImageId}
        textRef={textRef}
        viewMore={viewMore}
        setViewMore={setViewMore}
        isPlaying={isPlaying}
        handleToggleVideo={handleToggleVideo}
        handleStopVideo={handleStopVideo}
      />
    );
  };

  return Result;
};
