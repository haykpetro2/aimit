import React, { useState } from 'react';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const [activeImageId, setActiveImageId] = useState(0);

    const toggleModal = (id) => {
      setActiveImageId(id);
      setIsOpen((prev) => !prev);
    };

    return (
      <View
        {...props}
        isOpen={isOpen}
        toggleModal={toggleModal}
        activeImageId={activeImageId}
        t={t}
      />
    );
  };

  return Result;
};
