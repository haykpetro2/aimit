import React from 'react';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import InstaFeeds from '../InstaFeeds';

export const View = ({ limit }) => {
  return <InstaFeeds limit={limit} />;
};

View.propTypes = {
  limit: PropTypes.number,
};
