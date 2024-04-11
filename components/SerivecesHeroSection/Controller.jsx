import React, { useState } from 'react';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const toggleModal = () => {
      setIsOpenModal((prev) => !prev);
    };
    return <View {...props} t={t} isOpenModal={isOpenModal} toggleModal={toggleModal} />;
  };

  return Result;
};
