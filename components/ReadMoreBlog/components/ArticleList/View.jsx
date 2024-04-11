import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './style.module.scss';

export const View = ({ title = '', showDate = '', description = '', id }) => {
  return (
    <li className={styles['list-item']}>
      <Link href={`/blog/${id}`}>
        <a>
          <h3 className={styles['item-name']}>{title}</h3>{' '}
        </a>
      </Link>
      <p className={styles['item-date']}>{showDate}</p>
      <div
        className={`${styles['description-item']} description`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </li>
  );
};

View.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showDate: PropTypes.string,
  id: PropTypes.number,
  handleLink: PropTypes.func,
};
