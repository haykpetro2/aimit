import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ data, ...props }) => {
    const { t } = useTranslations();
    const { locale } = useRouter();

    return <View {...props} t={t} filteredData={data} locale={locale} />;
  };
  Result.propTypes = {
    data: PropTypes.array,
  };

  return Result;
};
