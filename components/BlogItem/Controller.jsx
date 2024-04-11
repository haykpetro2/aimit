import React from 'react';
import PropTypes from 'prop-types';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ date, ...props }) => {
    const { t } = useTranslations();
    const imageUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const showDate = date.split('T')[0];

    return <View t={t} {...props} imageUrl={imageUrl} showDate={showDate} />;
  };
  Result.propTypes = {
    date: PropTypes.string,
  };

  return Result;
};
