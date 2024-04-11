import React, { useEffect, useState } from 'react';
import { videoList } from './Constants/constants';
import { handleServiceScroll } from '../../../../config/helpers';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [isMore, setIsMore] = useState(true);
    const [videoCount, setVideoCount] = useState(0);
    const [listLimit, setListLimit] = useState(videoCount);
    const [activeImageId, setActiveImageId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery(SCREENS.isTablet);

    const newVideoList = [...videoList];
    const sliceVideoList = newVideoList.splice(0, videoCount);

    useEffect(() => {
      if (isMobile) {
        setVideoCount(2);
        setListLimit(2);
      } else {
        setVideoCount(3);
        setListLimit(3);
      }
    }, [isMobile]);

    const toggleModal = (id) => {
      setActiveImageId(id);
      setIsOpen((prev) => !prev);
    };

    const handleMoreVideoLimit = () => {
      if (videoCount >= videoList.length - listLimit) {
        setIsMore(false);
        setVideoCount(videoCount + listLimit);
      } else {
        setVideoCount(videoCount + listLimit);
      }
    };

    const handleInitialVideoLimit = () => {
      handleServiceScroll('blogVideo');
      setVideoCount(listLimit);
      setIsMore(true);
    };

    return (
      <View
        {...props}
        videoList={videoList}
        sliceVideoList={sliceVideoList}
        isMore={isMore}
        handleMoreVideoLimit={handleMoreVideoLimit}
        handleInitialVideoLimit={handleInitialVideoLimit}
        isOpen={isOpen}
        toggleModal={toggleModal}
        activeImageId={activeImageId}
        t={t}
      />
    );
  };

  return Result;
};
