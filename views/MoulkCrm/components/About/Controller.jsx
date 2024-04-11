import React, { useState } from 'react';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [animate, setAnimate] = useState({
      first: false,
      second: false,
    });

    const animation = (key) => {
      const newAnimate = { ...animate };
      newAnimate[key] = !newAnimate[key];
      setAnimate(newAnimate);
    };
    return <View {...props} animation={animation} animate={animate} t={t} />;
  };

  return Result;
};
