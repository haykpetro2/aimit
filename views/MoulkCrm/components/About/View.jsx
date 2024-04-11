import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Slider from './components/Slider';
import styles from './style.module.scss';

export const View = ({ animate, animation, t }) => {
  return (
    <section id="about" className={styles['about-section']}>
      <Slider />
      <div className={styles['about-section-main']}>
        <div className="container-big">
          <div className={`section-heading ${styles['section-headline']}`}>
            <h3>{t('aboutProject')}</h3>
          </div>
          <div className={styles['mainpanel-overlay']}>
            <div
              onClick={() => animation('first')}
              className={`${styles['animated-button']} ${styles['left-side']} ${
                animate.first ? styles.animated : ''
              }`}
            >
              <div className={styles['animated-img']}>
                <Image src="/images/uploads/about_like.png" layout="fill" />
              </div>
              <div className={styles['animated-left']}>
                <Image src="/images/uploads/about_like.png" layout="fill" />
              </div>
              <div className={styles['animated-right']}>
                <Image src="/images/uploads/about_like.png" layout="fill" />
              </div>
            </div>
            <div className={styles['about-mainpanel']}>
              <div className={styles['about-mainpanel-top']}>
                <span />
                <span />
                <span />
              </div>
              <div className={styles['about-mainpanel-body']}>
                <div className={styles['about-text']}>
                  <p>{t('caseStudiesDescMoulkCrm')}</p>
                </div>
              </div>
            </div>
            <div
              onClick={() => animation('second')}
              className={`${styles['animated-button']} ${styles['right-side']} ${
                animate.second ? styles.animated : ''
              }`}
            >
              <div className={styles['animated-img']}>
                <Image src="/images/uploads/about_like.png" layout="fill" />
              </div>
              <div className={styles['animated-left']}>
                <Image src="/images/uploads/about_like.png" layout="fill" />
              </div>
              <div className={styles['animated-right']}>
                <Image src="/images/uploads/about_like.png" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  animate: PropTypes.object,
  animation: PropTypes.func,
  t: PropTypes.func,
};
