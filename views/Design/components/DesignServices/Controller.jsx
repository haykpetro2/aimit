import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { handleServiceScroll } from '../../../../config/helpers';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const [opened, setOpened] = useState({
      1: false,
      2: false,
      3: false,
    });
    const { t } = useTranslations();
    const {
      query: { tab },
    } = useRouter();

    const handleToggleOpen = (id) => {
      setOpened((prev) => {
        return { ...prev, [id]: true };
      });
    };

    const handleToggleClose = (id) => {
      setOpened((prev) => {
        return { ...prev, [id]: false };
      });
      handleServiceScroll(id);
    };
    return (
      <View
        {...props}
        t={t}
        tab={tab}
        opened={opened}
        handleToggleOpen={handleToggleOpen}
        handleToggleClose={handleToggleClose}
      />
    );
  };

  return Result;
};
