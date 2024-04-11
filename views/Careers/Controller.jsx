import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Controller = (View) => {
  const Result = ({ vacanciesData, count, ...props }) => {
    useEffect(() => {
      localStorage.setItem('vacanciesCount', count);
    }, [count]);

    return <View {...props} vacanciesData={vacanciesData} />;
  };

  Result.propTypes = {
    vacanciesData: PropTypes.array,
    count: PropTypes.number,
  };

  return Result;
};
