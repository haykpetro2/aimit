import React, { useEffect, useState } from 'react';
import { SCREENS } from '../../../constants/constants';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { isClient } from '../../../config/helpers';
import { useTranslations } from '../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const isMobile = useMediaQuery(SCREENS.isTablet);
    const [scroll, setScroll] = useState(false);
    const listener = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    useEffect(() => {
      if (isClient()) {
        window.addEventListener('scroll', listener);
      }
      return () => window.removeEventListener('scroll', listener);
    }, []);

    return <View t={t} scroll={scroll} isMobile={isMobile} {...props} />;
  };

  return Result;
};
