import React from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();

    const isLaptop = useMediaQuery(SCREENS.isLaptop);
    const isSmallTablet = useMediaQuery(SCREENS.isSmallTablet);

    return <View {...props} t={t} isLaptop={isLaptop} isSmallTablet={isSmallTablet} />;
  };

  return Result;
};
