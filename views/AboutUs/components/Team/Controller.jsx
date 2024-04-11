import React, { useState } from 'react';
import { teamList } from './Constants/constants';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import { handleServiceScroll } from '../../../../config/helpers';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [listLimit, setListLimit] = useState(10);
    const [isMore, setIsMore] = useState(true);

    const isTablet = useMediaQuery(SCREENS.isTablet);

    const newTeamList = [...teamList];
    const sliceTeamList = isTablet ? newTeamList.splice(0, listLimit) : teamList;

    const handleMoreTeamLimit = () => {
      if (listLimit >= teamList.length - 10) {
        setIsMore(false);
        setListLimit(listLimit + 10);
      } else {
        setListLimit(listLimit + 10);
      }
    };

    const handleInitialTeamLimit = () => {
      handleServiceScroll('team');
      setListLimit(10);
      setIsMore(true);
    };

    return (
      <View
        {...props}
        isMore={isMore}
        sliceTeamList={sliceTeamList}
        handleMoreTeamLimit={handleMoreTeamLimit}
        handleInitialTeamLimit={handleInitialTeamLimit}
        isTablet={isTablet}
        t={t}
      />
    );
  };

  return Result;
};
