import React, { useEffect, useState } from 'react';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const [vacancyCount, setVacancyCount] = useState(null);
    const { t } = useTranslations();
    useEffect(() => {
      setVacancyCount(localStorage.getItem('vacanciesCount'));
    }, []);

    return <View {...props} t={t} vacancyCount={vacancyCount} />;
  };

  return Result;
};
