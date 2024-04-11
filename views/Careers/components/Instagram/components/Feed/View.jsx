import PropTypes from 'prop-types';

export const View = ({ post }) => {
  return post;
};

View.propTypes = {
  post: PropTypes.object,
};
