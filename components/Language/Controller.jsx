import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useLocalConfig } from '../../hooks/useLocalConfig';
import { useOutsideDetect } from '../../hooks/useOutsideDetect';

export const Controller = (View) => {
  const Result = (props) => {
    const { locales, asPath } = useRouter();
    const [languageOpen, setLanguageOpen] = useState(false);
    const { language, setLanguage } = useLocalConfig();
    const handleLanguage = (locale) => {
      if (locale === 'en') {
        document.cookie = 'language=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }

      setLanguage(locale);
      setLanguageOpen((prev) => !prev);
    };
    const handleLanguageOpen = () => {
      setLanguageOpen((prev) => !prev);
    };

    const handleOutsideClick = () => {
      setLanguageOpen(false);
    };
    const ref = useOutsideDetect(handleOutsideClick);

    return (
      <View
        {...props}
        handleLanguage={handleLanguage}
        locales={locales}
        asPath={asPath}
        language={language}
        selectedLng={language}
        languageOpen={languageOpen}
        handleLanguageOpen={handleLanguageOpen}
        currentRef={ref}
      />
    );
  };

  return Result;
};
