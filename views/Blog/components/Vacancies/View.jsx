import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import VacanciesItem from '../../../../components/VacanciesItem';
import styles from './style.module.scss';

export const View = ({ t, filteredData, locale }) => {
  return (
    <section className={styles['vacancies-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('vacancies')}</h2>
        </div>
        <div className={styles['vacancies-widgets']}>
          {filteredData.length ? (
            filteredData.map(({ [`title_${locale}`]: text, id, title_en, status }) => {
              return (
                <VacanciesItem
                  key={id}
                  id={id}
                  text={text || title_en}
                  iconic={status}
                  isRef={false}
                />
              );
            })
          ) : (
            <h1>Nothing found for your search </h1>
          )}
        </div>
        {!!filteredData.length && (
          <div className={styles['view-more']}>
            <Link href="/careers">
              <a>{t('viewMore')}</a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

View.propTypes = {
  handleRouter: PropTypes.func,
  filteredData: PropTypes.array,
  locale: PropTypes.string,
  t: PropTypes.func,
};
