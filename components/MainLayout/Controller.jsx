import React from 'react';
import { View } from './View';

const Controller = () => {
  const Result = (props) => {
    return <View {...props} />;
  };
  return Result;
};

export default Controller(View);
