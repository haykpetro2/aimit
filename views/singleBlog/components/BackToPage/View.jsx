import React from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['backPage-section']}>
      <div className="container">
        <Link href="/blog">
          <div className={styles['backToPage-element']}>
            <div className={styles['backToPage-link']}>
              <a>Blog</a>
            </div>
            <div className={styles['backToPage-icon']}>
              <div className={styles['backToPage-arrow']} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
