import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Hand from '../../../../public/images/uploads/hand_moulk.png';
import HandLeftTop from '../../../../public/images/uploads/hand_left_top.png';
import HandRightTop from '../../../../public/images/uploads/hand_right_top.png';
import HandLeftBottom from '../../../../public/images/uploads/hand_left_bottom.png';
import HandRightMiddle from '../../../../public/images/uploads/hand_right_middle.png';
import HandRightBottom from '../../../../public/images/uploads/hand_right_bottom.png';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['hero-section']}>
      <div className="container-big">
        <div className={styles['hero-section-mainpanel']}>
          <div className={`${styles['hand-left-middle']} ${styles.hands}`}>
            <Image src={Hand} layout="fill" />
          </div>
          <div className={`${styles['hand-left-top']} ${styles.hands}`}>
            <Image src={HandLeftTop} layout="fill" />
          </div>
          <div className={`${styles['hand-left-bottom']} ${styles.hands}`}>
            <Image src={HandLeftBottom} layout="fill" />
          </div>
          <div className={`${styles['hand-right-middle']} ${styles.hands}`}>
            <Image src={HandRightMiddle} layout="fill" />
          </div>
          <div className={`${styles['hand-right-top']} ${styles.hands}`}>
            <Image src={HandRightTop} layout="fill" />
          </div>
          <div className={`${styles['hand-right-bottom']} ${styles.hands}`}>
            <Image src={HandRightBottom} layout="fill" />
          </div>
          <div className={styles['hero-headline']}>
            <h1>{t('moulkDelivery')}</h1>
          </div>
          <div data-aos="zoom-in" className={styles['delivery-image']}>
            <Image src="/images/uploads/moulk-delivery-mobiles.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
