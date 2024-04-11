import React from 'react';

export const Controller = (View) => {
  const Result = (props) => {
    const limit = 30;
    return <View {...props} limit={limit} />;
  };

  return Result;
};
