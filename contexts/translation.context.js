/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useCallback, useContext, useState } from 'react';

import { languages } from './languages';

import translations from './translations.json';

// const browserLang = navigator.language.split('-')[0];

// const isSupported = Object.values(languages).includes(browserLang);

const TranslationContext = createContext(languages.en);

const TranslationProvider = ({ children }) => {
  const [currentLang, setLang] = useState(languages.en);

  const setLanguage = useCallback(
    (lang) => {
      setLang(lang);
    },
    [setLang]
  );

  const t = useCallback(
    (key) => {
      return translations[currentLang][key];
    },
    [currentLang]
  );

  return (
    <TranslationContext.Provider
      value={{
        setLanguage,
        t,
        lang: currentLang,
        supportedLanguages: languages,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(TranslationContext);

  return context;
};

export default TranslationProvider;
