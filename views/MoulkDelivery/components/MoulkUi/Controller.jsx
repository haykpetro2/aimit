import React from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const Controller = (View) => {
  const Result = (props) => {
    const isMobile = useMediaQuery(SCREENS.isLaptop);

    return <View {...props} isMobile={isMobile} />;
  };

  return Result;
};
