import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../PrimaryButton';
import FormModal from '../GetInTouch/Components/FormModal';
import styles from './style.module.scss';

export const View = ({ t, title, description, isOpen, toggleModal }) => {
  return (
    <section className={styles['getInTouch-section']}>
      <div className="container">
        <div className={styles['getInTouch-section_mainpanel']}>
          <div className={styles['getInTouch-descriptions']}>
            <div className="section-heading">
              <h2>{t(title)}</h2>
            </div>
            <div className={`section-description ${styles['section-description']}`}>
              <p>{t(description)}</p>
            </div>
          </div>
          <div className={styles['section-button']}>
            <PrimaryButton text={t('getInTouch')} onClick={toggleModal} isSubmit />
          </div>
        </div>
        <FormModal isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  toggleModal: PropTypes.func,
  isOpen: PropTypes.bool,
};
