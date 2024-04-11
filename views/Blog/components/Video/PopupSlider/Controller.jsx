import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Controller = (View) => {
  const Result = (props) => {
    const { activeImageId } = props;
    const { videoList } = props;
    const [swiperData, setSwiperData] = useState(null);
    const youtubeRef = useRef(null);

    useEffect(() => {
      const newData = [...videoList];
      const firstData = newData.splice(activeImageId - 1);
      const copyData = firstData.concat(newData);
      setSwiperData(copyData);
    }, [activeImageId]);

    const handleVideoStop = () => {
      youtubeRef.current?.stopVideo();
    };

    Result.propTypes = {
      activeImageId: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
      videoList: PropTypes.array,
    };
    return (
      <View
        {...props}
        swiperData={swiperData}
        youtubeRef={youtubeRef}
        handleVideoStop={handleVideoStop}
      />
    );
  };
  return Result;
};
