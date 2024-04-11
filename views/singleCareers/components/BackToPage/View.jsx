import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ vacancyCount, t }) => {
  return (
    <section className={styles['backPage-section']}>
      <div className="container">
        <Link href="/careers">
          <div className={styles['backToPage-element']}>
            <div className={styles['backToPage-icon']}>
              <div className={styles['backToPage-arrow']} />
            </div>
            <div className={styles['backToPage-link']}>
              <a>
                {t('allVacancies')} ({vacancyCount})
              </a>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  vacancyCount: PropTypes.string,
};
