import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';

export const Controller = (View) => {
  const Result = ({ setShowValue, ...props }) => {
    const [value, setValue] = useState(0);
    const [rowSize, setRowSize] = useState(50);

    const isMobile = useMediaQuery(SCREENS.isMobile);

    const width = (value / 60) * 100;
    const leftSide =
      width < 6 ? `${width + (6 - width)}%` : width > 90 ? `${width - (width - 90)}%` : `${width}%`;

    useEffect(() => {
      if (width <= 6) {
        setRowSize(width + 17);
      } else if (width >= 90) {
        setRowSize(width - 12);
      } else {
        setRowSize(50);
      }
    }, [value]);

    useEffect(() => {
      if (!isMobile) {
        if (value <= 10) {
          setShowValue(5000 + value * 500);
        } else if (value > 10 && value <= 20) {
          setShowValue(10000 + (value - 10) * 4000);
        } else if (value > 20 && value <= 30) {
          setShowValue(50000 + (value - 20) * 5000);
        } else if (value > 30 && value <= 40) {
          setShowValue(100000 + (value - 30) * 15000);
        } else if (value > 40 && value <= 50) {
          setShowValue(250000 + (value - 40) * 75000);
        } else {
          setShowValue(1000000 + (value - 50) * 400000);
        }
      }
      if (isMobile) {
        if (value <= 10) {
          setShowValue(value * 25000);
        } else if (value > 10 && value <= 20) {
          setShowValue(250000 + (value - 10) * 25000);
        } else if (value > 20 && value <= 30) {
          setShowValue(500000 + (value - 20) * 50000);
        } else if (value > 30 && value <= 40) {
          setShowValue(1000000 + (value - 30) * 50000);
        } else if (value > 40 && value <= 50) {
          setShowValue(1500000 + (value - 40) * 150000);
        } else {
          setShowValue(3000000 + (value - 50) * 200000);
        }
      }
    }, [value]);

    const handleRangeValue = (e) => {
      setValue(e.target.value);
    };

    return (
      <View
        {...props}
        width={width}
        leftSide={leftSide}
        handleRangeValue={handleRangeValue}
        value={value}
        rowSize={rowSize}
        isMobile={isMobile}
      />
    );
  };
  Result.propTypes = {
    setShowValue: PropTypes.func,
  };

  return Result;
};
