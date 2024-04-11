import React from 'react';
import PropTypes from 'prop-types';
import HeaderFooter from './HeaderFooter';

export const View = ({ children, pageClass = '' }) => {
  return (
    <div className={`page ${pageClass}`}>
      <HeaderFooter />
      <main>{children}</main>
      <HeaderFooter placement="footer" />
    </div>
  );
};

View.propTypes = {
  children: PropTypes.element,
  pageClass: PropTypes.string,
};
