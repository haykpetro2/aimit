import React, { useState } from 'react';
import { StudiesList } from '../../../Home/components/CaseStudies/Constants/constants';
import { handleServiceScroll } from '../../../../config/helpers';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [isMore, setIsMore] = useState(true);
    const [listLimit, setListLimit] = useState(4);

    const caseStudiesShowList = 4;
    const spliceCaseStudiesList = [...StudiesList].splice(0, listLimit);

    const handleMoreCaseStudiesLimit = () => {
      if (listLimit >= StudiesList.length - caseStudiesShowList) {
        setIsMore(false);
        setListLimit(listLimit + caseStudiesShowList);
      } else {
        setListLimit(listLimit + caseStudiesShowList);
      }
    };

    const handleInitialCaseStudiesLimit = () => {
      handleServiceScroll('caseStudies');
      setListLimit(caseStudiesShowList);
      setIsMore(true);
    };

    return (
      <View
        {...props}
        spliceCaseStudiesList={spliceCaseStudiesList}
        isMore={isMore}
        handleMoreCaseStudiesLimit={handleMoreCaseStudiesLimit}
        handleInitialCaseStudiesLimit={handleInitialCaseStudiesLimit}
        t={t}
      />
    );
  };

  return Result;
};
