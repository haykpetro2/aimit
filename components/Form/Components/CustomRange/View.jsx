import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import Dollar from '../../../../svgs/Dollar';

export const View = ({
  handleRangeValue,
  value,
  showValue,
  width,
  leftSide,
  rowSize,
  isMobile,
}) => {
  return (
    <div className={styles['range-overlay']}>
      <div className={styles['input-overlay']}>
        <div className={styles['range-wrap']}>
          <div className={styles['steps-overlay']}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div
            className={styles['range-percent']}
            style={{
              width: `${width}%`,
            }}
          />
          <p
            className={styles['show-value']}
            style={{
              left: isMobile ? leftSide : `${width}%`,
            }}
          >
            {`${showValue.toLocaleString()} $`}
            <span className={styles.triangle} style={{ left: isMobile ? `${rowSize}%` : '50%' }} />
          </p>
          <input
            value={value}
            onChange={(e) => handleRangeValue(e)}
            id="range"
            type="range"
            min={0}
            max={60}
            step="1"
          />
        </div>
        <div className={styles['numbers-overlay']}>
          {!isMobile ? (
            <>
              <span>5000$</span>
              <span>10000$</span>
              <span>50000$</span>
              <span>100 000$</span>
              <span>250 000$ </span>
              <span>1 000 000$</span>
              <span />
            </>
          ) : (
            <>
              <span>0</span>
              <span>0.25m</span>
              <span>0.5m</span>
              <span>1m</span>
              <span>1.5m</span>
              <span>3m</span>
              <span />
            </>
          )}
        </div>
      </div>
      <Dollar />
    </div>
  );
};

View.propTypes = {
  handleRangeValue: PropTypes.func,
  showValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  leftSide: PropTypes.string,
  width: PropTypes.number,
  rowSize: PropTypes.number,
  isMobile: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
