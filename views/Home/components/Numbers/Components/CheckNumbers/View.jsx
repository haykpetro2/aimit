import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';

export const View = ({ limit, handleVisible, count }) => {
  return (
    <VisibilitySensor onChange={handleVisible}>
      <p>
        {count}
        {count >= limit && '+'}
      </p>
    </VisibilitySensor>
  );
};

View.propTypes = {
  limit: PropTypes.number,
  count: PropTypes.number,
  handleVisible: PropTypes.func,
};
