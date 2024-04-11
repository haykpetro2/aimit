import React, { useState } from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const Controller = (View) => {
  const Result = (props) => {
    const isTablet = useMediaQuery(SCREENS.isTablet);
    const [animate, setAnimate] = useState({
      first: false,
      second: false,
      third: false,
    });

    const animation = (key) => {
      const newAnimate = { ...animate };
      newAnimate[key] = !newAnimate[key];
      setAnimate(newAnimate);
    };

    return <View {...props} isTablet={isTablet} animate={animate} animation={animation} />;
  };

  return Result;
};
