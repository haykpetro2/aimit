import React, { useState } from 'react';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen((prev) => !prev);
    };

    return <View {...props} t={t} isOpen={isOpen} toggleModal={toggleModal} />;
  };

  return Result;
};
