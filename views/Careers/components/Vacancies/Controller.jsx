import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ vacanciesData, ...props }) => {
    const { t } = useTranslations();
    const { locale } = useRouter();

    return <View {...props} t={t} vacanciesData={vacanciesData} locale={locale} />;
  };
  Result.propTypes = {
    vacanciesData: PropTypes.array,
  };

  return Result;
};
