import React from 'react';
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from 'react-modal';
import Form from '../../../Form';
import styles from './style.module.scss';

export const View = ({ isOpen, toggleModal, t }) => {
  return (
    isOpen && (
      <Modal
        style={{
          overlay: {
            overflow: 'auto',
          },
        }}
        className={styles['form-modal']}
        isOpen={isOpen}
        ariaHideApp={false}
      >
        <div className={styles['modal-content']}>
          <div className={styles['section-heading']}>
            <h3>{t('tellAboutProject')}</h3>
          </div>
          <Form id="6" />
          <button
            type="button"
            className={styles['close-modal']}
            aria-label="close-modal"
            onClick={toggleModal}
          />
        </div>
      </Modal>
    )
  );
};

View.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  t: PropTypes.func,
};
