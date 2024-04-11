import React from 'react';
import PropTypes from 'prop-types';

export const Controller = (View) => {
  const Result = ({ date, ...props }) => {
    const showDate = date.split('T')[0];
    return <View {...props} showDate={showDate} />;
  };
  Result.propTypes = {
    date: PropTypes.string,
  };
  return Result;
};
