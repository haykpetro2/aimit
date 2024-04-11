import React from 'react';

import Link from 'next/link';
import styles from './style.module.scss';
import WhiteLogo from '../../svgs/WhiteLogo';

export const View = () => {
  return (
    <section className={styles.error_message}>
      <div className="container">
        <div className={styles['section-mainpanel']}>
          <div className={styles['section-heading']}>
            <h1>Oops!</h1>
          </div>
          <div className={styles['error-message-big']}>
            <h3>Something went wrong</h3>
          </div>
          <div className={styles['error-message-small']}>
            <h3>Error 404 page not found</h3>
          </div>
          <div className={styles['home-button']}>
            <Link href="/">
              <a>Go to home</a>
            </Link>
          </div>
          <div className={styles['white-logo']}>
            <Link href="/">
              <a>
                <WhiteLogo />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
