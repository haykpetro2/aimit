import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ isMobile }) => {
  return (
    <section className={styles['moulkUi-section']}>
      <div className="container">
        <div className={styles['moulkUi-mainpanel-overlay']}>
          {!isMobile ? (
            <div className={styles['moulkUi-mainpanel']}>
              <div data-aos="zoom-in" className={styles['screen-img']}>
                <Image src="/images/uploads/splash-screen.png" layout="fill" />
              </div>
              <div data-aos="zoom-in" className={styles['signUp-img']}>
                <Image src="/images/uploads/sign-up.png" layout="fill" />
              </div>
              <div className={styles['profile-images']}>
                <div data-aos="zoom-in" className={styles['signIn-img']}>
                  <Image src="/images/uploads/SignIn.png" layout="fill" />
                </div>
                <div data-aos="zoom-in" className={styles['profile-img']}>
                  <Image src="/images/uploads/profile.png" layout="fill" />
                </div>
                <div data-aos="zoom-in" className={styles['navbar-img']}>
                  <Image src="/images/uploads/Navbar.png" layout="fill" />
                </div>
              </div>
            </div>
          ) : (
            <div className={styles['moulkUi-mainpanel-isMobile']}>
              <div className={styles['images-group']}>
                <div data-aos="zoom-in" className={styles['screen-img']}>
                  <Image src="/images/uploads/splash-screen.png" layout="fill" />
                </div>
                <div data-aos="zoom-in" className={styles['signUp-img']}>
                  <Image src="/images/uploads/sign-up.png" layout="fill" />
                </div>
              </div>
              <div className={styles['images-group']}>
                <div data-aos="zoom-in" className={styles['profile-img']}>
                  <Image src="/images/uploads/profile.png" layout="fill" />
                </div>
                <div data-aos="zoom-in" className={styles['signIn-img']}>
                  <Image src="/images/uploads/SignIn.png" layout="fill" />
                </div>
              </div>
              <div data-aos="zoom-in" className={styles['navbar-img']}>
                <Image src="/images/uploads/Navbar.png" layout="fill" />
              </div>
            </div>
          )}

          <div className={styles['section-headline']}>
            <h3>Profile</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  isMobile: PropTypes.bool,
};
