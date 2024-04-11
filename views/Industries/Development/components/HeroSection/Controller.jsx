import React from 'react';

export const Controller = (View) => {
  const Result = (props) => {
    return <View {...props} />;
  };

  return Result;
};
