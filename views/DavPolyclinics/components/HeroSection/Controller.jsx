import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const contentRef = useRef(null);
    const isMobile = useMediaQuery(SCREENS.isMobile);

    let space;
    useEffect(() => {
      space = (window.innerWidth - contentRef.current.offsetWidth) / 2;
    });

    const switcher = (e) => {
      if (e.nativeEvent.which === 1) {
        const switcher = document.getElementById('switcher');
        const lightImage = document.getElementById('lightImage');
        const horiz = `${e.clientX - space}px`;
        const horizImage = `${e.clientX - space}px`;
        switcher.style.left = horiz;
        lightImage.style.width = horizImage;
      }
    };
    const switcherMobile = (e) => {
      const switcher = document.getElementById('switcher');
      const lightImage = document.getElementById('lightImage');
      const horiz = `${e.touches[0].clientX}px`;
      switcher.style.left = horiz;
      lightImage.style.width = horiz;
    };
    return (
      <View
        {...props}
        switcherMobile={switcherMobile}
        switcher={switcher}
        contentRef={contentRef}
        t={t}
        isMobile={isMobile}
      />
    );
  };

  return Result;
};
