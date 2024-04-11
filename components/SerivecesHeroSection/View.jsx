import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import Phone from '../../svgs/Phone';
import CircleAnimation from '../CircleAnimation';
import FormModal from '../GetInTouch/Components/FormModal';

export const View = ({ t, title, description, icon, isOpenModal, toggleModal }) => {
  return (
    <section className={styles['subServices-section']}>
      <div className="container">
        <div className={styles['subServices-mainpanel']}>
          <div className={styles['subServices-descriptions']}>
            <div className={`section-heading ${styles['section-heading']}`}>
              <h2>{title}</h2>
            </div>
            <div className={`section-description ${styles['section-description']}`}>
              <p>{description}</p>
            </div>
            <div className={styles['section-button']}>
              <div className={styles['booking-call']}>
                <button type="button" onClick={toggleModal}>
                  <Phone />
                  {t('getInTouch')}
                </button>
              </div>
            </div>
          </div>
          <div className={styles['section-icon-overlay']}>
            <div className={styles['section-icon']}>
              <CircleAnimation strokeWidth="10" stroke="#D9E5FC" />
            </div>
            <div className={styles.icon}>{icon}</div>
          </div>
        </div>
      </div>
      <FormModal isOpen={isOpenModal} toggleModal={toggleModal} />
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
  toggleModal: PropTypes.func,
  isOpenModal: PropTypes.bool,
};
