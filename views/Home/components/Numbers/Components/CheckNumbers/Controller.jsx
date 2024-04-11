import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { time } from '../../Constants/constants';

export const Controller = (View) => {
  const Result = ({ limit }) => {
    const [isLimit, setIsLimit] = useState(false);
    const [count, setCount] = useState(0);

    const interval = time / limit;

    useEffect(() => {
      const id = setInterval(() => {
        if (isLimit && count < limit) {
          setCount((prev) => prev + 1);
        }
      }, interval);
      return () => clearInterval(id);
    }, [isLimit, count]);

    const handleVisible = (isVisible) => {
      setIsLimit(isVisible);
    };

    Result.propTypes = {
      limit: PropTypes.number,
    };
    return <View handleVisible={handleVisible} count={count} limit={limit} />;
  };

  return Result;
};
