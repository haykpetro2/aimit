import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './style.module.scss';

export const View = ({
  text = '',
  onClick = () => {},
  isLink = false,
  href = '#',
  isSubmit = false,
}) => {
  return !isLink ? (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`${styles.primary_btn} ${isSubmit ? styles['blue-version'] : ''}`}
      onClick={onClick}
    >
      {text}
    </button>
  ) : (
    <Link href={href}>
      <a className={styles.primary_btn}>{text}</a>
    </Link>
  );
};
View.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  href: PropTypes.string,
  isSubmit: PropTypes.bool,
  disabled: PropTypes.bool,
};
