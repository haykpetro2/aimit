import React from 'react';
import Image from 'next/image';
import GoogleImage from '../../../../public/images/uploads/google_image.png';
import YandexImage from '../../../../public/images/uploads/yandex_image.png';
import YahooImage from '../../../../public/images/uploads/yahoo_image.png';
import LinkedinImage from '../../../../public/images/uploads/linkedin_image.png';
import InstagramImage from '../../../../public/images/uploads/instagram_image.png';
import VkinImage from '../../../../public/images/uploads/vk_mage.png';
import Facebook from '../../../../public/images/uploads/facebook_image.png';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['search-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>Search engines</h2>
        </div>

        <div className={styles['search-section_mainpanel']}>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={GoogleImage} />
            </div>
          </div>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={YandexImage} />
            </div>
          </div>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={YahooImage} />
            </div>
          </div>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={LinkedinImage} />
            </div>
          </div>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={Facebook} />
            </div>
          </div>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={InstagramImage} />
            </div>
          </div>
          <div className={`col_ ${styles['search-item-overlay']}`}>
            <div className={styles['search-item']}>
              <Image src={VkinImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
