import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SCREENS } from '../../constants/constants';
import { handleServiceScroll } from '../../config/helpers';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [mobileText, setMobileText] = useState(true);

    const isMobile = useMediaQuery(SCREENS.isTablet);

    const showMobileText = () => {
      handleServiceScroll('feedbackDescription');
      setMobileText((prev) => !prev);
    };

    return (
      <View
        {...props}
        t={t}
        mobileText={mobileText}
        showMobileText={showMobileText}
        isMobile={isMobile}
      />
    );
  };
  Result.propTypes = {
    videoRef: PropTypes.object,
  };

  return Result;
};
