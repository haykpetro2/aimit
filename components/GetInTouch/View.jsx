import React from 'react';
import Image from 'next/image';

import PropTypes from 'prop-types';
import CEO from '../../public/images/team/founders/hayk.png';
import CTO from '../../public/images/team/founders/aka.png';

import Linkedin from '../../svgs/Linkedin';
import Telegram from '../../svgs/Telegram';
import Whatsapp from '../../svgs/Whatsapp';
import Form from '../Form';
import styles from './style.module.scss';

export const View = ({ t }) => {
  return (
    <section className={styles['getInTouch-section']}>
      <div className="container">
        <div className={styles['getInTouch-headline']}>
          <div className="section-heading">
            <h2>{t('homeFormConversation')}</h2>
          </div>
          <div className={styles.getInTouchDescription}>
            <div className="description">
              <p>{t('formText')}</p>
            </div>
          </div>
        </div>
        <div className={styles['getInTouch-mainpanel']}>
          <div className={styles['getInTouch-members']}>
            <div className={styles['members-mainpanel']}>
              <div className={`col_ ${styles['member-item']}`}>
                <div className={styles['member-image']}>
                  <Image src={CEO} layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <div className={styles['member-infos-overlay']}>
                  <div className={styles['member-infos']}>
                    <h4 className={styles['member-name']}>Hayk Petrosyan</h4>
                    <p className={styles['member-position']}>Co-founder, CEO</p>
                  </div>
                  <div className={styles['member-contact']}>
                    <a href="mailto:haykpetrosyan@gmail.com">hayk.petrosyan.tw@gmail.com</a>
                    <a href="tel:+37455099003">+374 55 099003</a>
                  </div>
                  <div className={styles['member-socials']}>
                    <ul>
                      <li className={styles['social-item']}>
                        <a
                          href="https://www.linkedin.com/in/hayk-petrosyan-aab043174"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Linkedin />
                        </a>
                      </li>
                      <li className={styles['social-item']}>
                        <a href="https://t.me/moulk1" target="_blank" rel="noreferrer">
                          <Telegram />
                        </a>
                      </li>
                      <li className={styles['social-item']}>
                        <a href="https://wa.me/37455099003" target="_blank" rel="noreferrer">
                          <Whatsapp />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`col_ ${styles['member-item']}`}>
                <div className={styles['member-image']}>
                  <Image src={CTO} layout="fill" objectFit="cover" objectPosition="left center" />
                </div>
                <div className={styles['member-infos-overlay']}>
                  <div className={styles['member-infos']}>
                    <h4 className={styles['member-name']}>Arkadi Khachatran</h4>
                    <p className={styles['member-position']}>Co-founder, CTO</p>
                  </div>
                  <div className={styles['member-contact']}>
                    <a href="mailto:arkadikhachatryan.com">arkadi.khachatryan.tw@gmail.com</a>
                    <a href="tel:+37494412312">+374 94 412312</a>
                  </div>
                  <div className={styles['member-socials']}>
                    <ul>
                      <li className={styles['social-item']}>
                        <a
                          href="https://www.linkedin.com/in/arkadi-khachatryan-5b4243152"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Linkedin />
                        </a>
                      </li>
                      <li className={styles['social-item']}>
                        <a href="https://t.me/arkadikhach" target="_blank" rel="noreferrer">
                          <Telegram />
                        </a>
                      </li>
                      <li className={styles['social-item']}>
                        <a href="https://wa.me/37494412312" target="_blank" rel="noreferrer">
                          <Whatsapp />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form id="4" />
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
