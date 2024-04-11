import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { images } from '../../../../constants/images';

export const Controller = (View) => {
  const Result = (props) => {
    const { activeImageId } = props;
    const { feeds } = props;
    const [swiperData, setSwiperData] = useState(null);

    useEffect(() => {
      const newData = feeds ? [...feeds] : [...images];
      const firstData = newData.splice(activeImageId);
      const copyData = firstData.concat(newData);
      setSwiperData(copyData);
    }, [activeImageId, feeds]);

    const handleVideoStop = () => {
      const arr = document.getElementsByClassName('vid');
      Array.from(arr, (item) => item.pause());
    };

    Result.propTypes = {
      activeImageId: PropTypes.number,
      videoList: PropTypes.array,
      feeds: PropTypes.array,
    };
    return <View {...props} swiperData={swiperData} handleVideoStop={handleVideoStop} />;
  };
  return Result;
};
