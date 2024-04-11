import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['uiKit-section']}>
      <div className="container">
        <div className={styles['kit-mainpanel']}>
          <div className={styles['kit-image']}>
            <Image src="/images/uploads/ui_kit.png" layout="fill" />
          </div>
          <div className={styles['kit-text']}>
            <p>UI kit</p>
          </div>
        </div>
      </div>
    </section>
  );
};
