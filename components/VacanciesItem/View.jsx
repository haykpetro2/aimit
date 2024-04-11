import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './style.module.scss';

export const View = ({ text = '', iconic = false, id }) => {
  return (
    <div className={`col_ ${styles['vacancies-widget-overlay']}`}>
      <Link href={`/careers/${id}`}>
        <a>
          <div className={`${iconic ? styles.iconed : ''} ${styles['vacancies-widget']}`}>
            <div className={styles['vacancies-name']}>
              <p>{text}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

View.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  iconic: PropTypes.number,
};
