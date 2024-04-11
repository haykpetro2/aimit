import React, { useState } from 'react';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [showImage, setShowImage] = useState(true);

    return <View {...props} t={t} showImage={showImage} setShowImage={setShowImage} />;
  };

  return Result;
};
