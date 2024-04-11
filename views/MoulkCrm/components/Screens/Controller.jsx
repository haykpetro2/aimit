import React from 'react';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const pagination = {
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    };
    return <View {...props} pagination={pagination} t={t} />;
  };

  return Result;
};
