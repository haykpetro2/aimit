import React from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const isSmallTablet = useMediaQuery(SCREENS.isSmallTablet);

    return <View {...props} t={t} isSmallTablet={isSmallTablet} />;
  };

  return Result;
};
