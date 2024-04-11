import React from 'react';
import Link from 'next/link';
import Logo from '../../../../svgs/Logo';
import styles from './style.module.scss';

export const View = () => {
  return (
    <header className={styles['thnkYou-header']}>
      <div className="container">
        <div className={styles.brand}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
