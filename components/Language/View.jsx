import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Arrow from '../../svgs/Arrow';
import styles from './style.module.scss';

export const View = ({
  handleLanguage,
  locales,
  asPath,
  language,
  selectedLng,
  languageOpen,
  handleLanguageOpen,
  currentRef,
  placement,
}) => {
  const languageListOpen = languageOpen ? styles.languageListOpen : '';
  const subListOpen = languageOpen ? styles.subListOpen : '';
  return (
    <div className={styles.lang_switcher_overlay}>
      <div className={styles.lang_switcher} ref={currentRef}>
        <ul className={styles.langlistItem}>
          <li className={styles.select_lang}>
            <div
              onClick={handleLanguageOpen}
              className={
                placement
                  ? `${styles.active_lang} ${languageListOpen} ${styles.footer}`
                  : `${styles.active_lang} ${languageListOpen}`
              }
            >
              {language}
              <span className={placement ? styles.languageArrow : ' '}>
                <Arrow />
              </span>
            </div>
            <ul
              className={
                placement
                  ? `${styles.languageList} ${subListOpen} ${styles.footer}`
                  : `${styles.languageList} ${subListOpen}`
              }
            >
              {locales?.map(
                (locale) =>
                  selectedLng !== locale && (
                    <li key={locale}>
                      <Link href={asPath} locale={locale} scroll={false}>
                        <a onClick={() => handleLanguage(locale)}>{locale}</a>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
View.propTypes = {
  handleLanguage: PropTypes.func,
  locales: PropTypes.array,
  asPath: PropTypes.string,
  language: PropTypes.string,
  placement: PropTypes.string,
  selectedLng: PropTypes.string,
  languageOpen: PropTypes.bool,
  handleLanguageOpen: PropTypes.func,
  currentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};
