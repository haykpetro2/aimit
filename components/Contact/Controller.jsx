import React from 'react';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();

    return <View {...props} t={t} />;
  };

  return Result;
};
