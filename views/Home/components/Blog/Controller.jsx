import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ homeBlogData, ...props }) => {
    const { t } = useTranslations();
    const { locale } = useRouter();

    return <View {...props} t={t} homeBlogData={homeBlogData} locale={locale} />;
  };

  Result.propTypes = {
    homeBlogData: PropTypes.array,
  };

  return Result;
};
