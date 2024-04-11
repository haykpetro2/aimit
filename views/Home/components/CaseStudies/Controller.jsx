import React from 'react';
import { useRouter } from 'next/router';
import { StudiesList } from './Constants/constants';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const router = useRouter();
    const { pathname } = router;

    const handleCaseStudiesList = (pathname) => {
      if (!pathname) return StudiesList;
      return StudiesList.filter(({ routName }) => pathname !== routName);
    };

    return (
      <View {...props} t={t} handleCaseStudiesList={handleCaseStudiesList} pathname={pathname} />
    );
  };

  return Result;
};
