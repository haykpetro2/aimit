import React from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const isMobile = useMediaQuery(SCREENS.isMobile);

    return <View {...props} isMobile={isMobile} t={t} />;
  };

  return Result;
};
