import React from 'react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './style.module.scss';

export const View = ({
  t,
  isOpen,
  toggleModal,
  image,
  description,
  director,
  directorName,
  offsetHeight,
  scrollHeight,
}) => {
  return (
    isOpen &&
    scrollHeight > offsetHeight && (
      <Modal
        style={{
          overlay: {
            padding: '40px',
            backgroundColor: 'rgba(26, 32, 40, 0.6)',
            overflow: 'auto',
          },
        }}
        isOpen={isOpen}
        className={styles['feedback-modal']}
        ariaHideApp={false}
      >
        <div className={styles.feedback_item}>
          <div className={styles['feedback-headline']}>
            <h3>Feedback</h3>
          </div>
          <div className={`${styles.feedbackItem_infos}`}>
            <div className={styles.feedbackItemInfos_headline}>
              <div className={styles.feedbackItem_author}>
                <div className={styles.feebackAuthor_image}>
                  <Image layout="fill" src={image} />
                </div>
                <div className={styles.feedBackAuthor_infos}>
                  <h3 className={styles.feedBackAuthor_name}>{t(directorName)}</h3>
                  <p className={styles.feedBackAuthor_position}>{t(director)}</p>
                </div>
              </div>
              <div className={styles.feedBack_stars}>
                <span className={styles.star} />
                <span className={styles.star} />
                <span className={styles.star} />
                <span className={styles.star} />
                <span className={styles.star} />
              </div>
            </div>
            <div className={styles.feedback_description}>
              <p>{t(description)}</p>
            </div>
            <button type="button" className={styles['close-modal']} onClick={toggleModal}>
              {' '}
            </button>
          </div>
        </div>
      </Modal>
    )
  );
};

View.propTypes = {
  t: PropTypes.func,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  description: PropTypes.string,
  director: PropTypes.string,
  directorName: PropTypes.string,
  image: PropTypes.string,
  offsetHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
};
