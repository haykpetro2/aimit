import React from 'react';
import PropTypes from 'prop-types';

export const Controller = (View) => {
  const Result = ({ latestRes, vacanciesRes, articlesRes, ...props }) => {
    return (
      <View
        {...props}
        latestRes={latestRes}
        vacanciesRes={vacanciesRes}
        articlesRes={articlesRes}
      />
    );
  };
  Result.propTypes = {
    latestRes: PropTypes.array,
    vacanciesRes: PropTypes.array,
    articlesRes: PropTypes.array,
  };
  return Result;
};
