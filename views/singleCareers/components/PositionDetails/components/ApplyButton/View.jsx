import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ toggleModal = () => {} }) => {
  return (
    <div className={styles['button-overlay']}>
      <button onClick={toggleModal} type="button" className={styles['apply-button']}>
        Apply For This Positions
      </button>
    </div>
  );
};

View.propTypes = {
  toggleModal: PropTypes.func,
};
