import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Facebook from '../../svgs/FaceBookeWhite';
import Instagram from '../../svgs/InstagramWhite';
import Telegram from '../../svgs/TelegramWhite';
import Whatsapp from '../../svgs/WhatsappWhite';
import WhatsappWhiteBig from '../../svgs/WhatsappWhiteBig';
import Skype from '../../svgs/Skype';
import LinkedinWhite from '../../svgs/LinkedinWhite';
import styles from './style.module.scss';

export const View = ({ title = 'ourOffices', t }) => {
  return (
    <section className={styles['contact-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t(title)}</h2>
        </div>
        <div className={styles['contact-section_mainpanel']}>
          <div className={styles['contact-items']}>
            <div className={`col_ ${styles.contact_item_overlay}`}>
              <div className={styles['contact-item']}>
                <div className={styles['contact-item-title']}>
                  <h4>USA</h4>
                </div>
                <div className={styles['contact-item-infos']}>
                  <p>301 e Fairview Ave Glendale Ca 91207</p>
                  <a href="tel:+ 1 818 279 43 02">+ 1 818 279 43 02</a>
                </div>
                <div className={styles['contact-item-flag']}>
                  <Image src="/images/uploads/usa_flag.png" layout="fill" />
                </div>
              </div>
            </div>

            <div className={`col_ ${styles.contact_item_overlay}`}>
              <div className={styles['contact-item']}>
                <div className={styles['contact-item-title']}>
                  <h4>{t('countryGer')}</h4>
                </div>
                <div className={styles['contact-item-infos']}>
                  <p>{t('addressGer')}</p>
                  <a href="tel:+491 623 939 182">+491 623 939 182</a>
                </div>
                <div className={styles['contact-item-flag']}>
                  <Image src="/images/uploads/doch_flag.png" layout="fill" />
                </div>
              </div>
            </div>
            <div className={`col_ ${styles.contact_item_overlay}`}>
              <div className={styles['contact-item']}>
                <div className={styles['contact-item-title']}>
                  <h4>{t('countryArm')}</h4>
                </div>
                <div className={styles['contact-item-infos']}>
                  <p>{t('addressArm')}</p>
                  <a href="tel:+374 41 122 101">+374 41 122 101</a>
                </div>
                <div className={styles['contact-item-flag']}>
                  <Image src="/images/uploads/arm_flag.png" layout="fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.contact_item_overlay}`}>
        <div className="container">
          <div className={`${styles['contact-item']}`}>
            <div className={`${styles['contact-item-inner']}`}>
              <div className={styles['contact-item-title']}>
                <h4>{t('contactUs')}</h4>
              </div>
              <div className={styles['social-icons']}>
                <ul>
                  <li className={styles['social-item']}>
                    <a target="_blank" rel="noopener noreferrer" href="https://t.me/aimitcompany">
                      <Telegram />
                    </a>
                  </li>
                  <li className={styles['social-item']}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/qr/6P4LEJ7C5SRQB1"
                    >
                      <Whatsapp />
                    </a>
                  </li>
                  <li className={styles['social-item']}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="viber://add?number=37441122101"
                    >
                      <WhatsappWhiteBig />
                    </a>
                  </li>
                  <li className={styles['social-item']}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://join.skype.com/invite/CNosrcc9CG0l"
                    >
                      <Skype />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles['contact-item-inner']}`}>
              <div className={styles['contact-item-title']}>
                <h4>{t('followUs')}</h4>
              </div>
              <div className={styles['social-icons']}>
                <ul>
                  <li className={styles['social-item']}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/aimitcompany"
                    >
                      <Facebook />
                    </a>
                  </li>
                  <li className={styles['social-item']}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/aimitcompany"
                    >
                      <Instagram />
                    </a>
                  </li>
                  <li className={styles['social-item']}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/company/aimit-company"
                    >
                      <LinkedinWhite />
                    </a>
                  </li>
                  {/* //todo */}
                  {/* <li className={styles['social-item']}> */}
                  {/*  <a href="#"> */}
                  {/*    <BehanceWhite /> */}
                  {/*  </a> */}
                  {/* </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  title: PropTypes.string,
  t: PropTypes.func,
};
