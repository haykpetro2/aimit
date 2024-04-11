import React from 'react';
import Controller from './Controller';

export default (Component, pageClass) => {
  const Result = (props) => {
    return (
      <Controller pageClass={pageClass}>
        <Component {...props} />
      </Controller>
    );
  };
  return Result;
};
