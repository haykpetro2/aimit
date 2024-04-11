import React from 'react';
import PropTypes from 'prop-types';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ homeBlogData, ...props }) => {
    const { t } = useTranslations();

    return <View {...props} t={t} homeBlogData={homeBlogData} />;
  };

  Result.propTypes = {
    homeBlogData: PropTypes.array,
  };

  return Result;
};
