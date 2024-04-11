import React from 'react';
import PropTypes from 'prop-types';
import VacanciesItem from '../../../../components/VacanciesItem';
import styles from './style.module.scss';
import Loader from '../../../../components/Loader';

export const View = ({ t, vacanciesData, locale }) => {
  if (!vacanciesData.length) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <section className={styles['vacancies-section']}>
      <div className="container">
        <div className="section-heading">
          <h3>
            {t('allVacancies')} ({vacanciesData.length})
          </h3>
        </div>
        <div className={styles['vacancies-section-mainpanel']}>
          <div className={styles['vacancies-widgets']}>
            {vacanciesData.length ? (
              vacanciesData.map(({ [`title_${locale}`]: text, id, status, title_en }) => {
                return <VacanciesItem key={id} id={id} text={text || title_en} iconic={status} />;
              })
            ) : (
              <h1>Nothing found for your search </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  locale: PropTypes.string,
  vacanciesData: PropTypes.array,
};
