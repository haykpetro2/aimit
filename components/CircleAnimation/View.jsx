import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ stroke, strokeWidth }) => {
  return (
    <div className={styles.circle}>
      <div className={styles.circle__item}>
        <svg viewBox="0 0 50 50" className={styles.circle__spinner}>
          <circle
            className={styles.path}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={stroke}
            strokeDasharray="100"
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    </div>
  );
};

View.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
};
