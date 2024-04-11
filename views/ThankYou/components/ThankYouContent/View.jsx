import React from 'react';
import Image from 'next/image';
import TelegramWhite from '../../../../svgs/TelegramWhite';
import WhatsappWhite from '../../../../svgs/WhatsappWhite';
import WhatsappWhiteBig from '../../../../svgs/WhatsappWhiteBig';
import Skype from '../../../../svgs/Skype';
import FaceBookWhite from '../../../../svgs/FaceBookeWhite';
import InstagramWhite from '../../../../svgs/InstagramWhite';
import LinkedinWhite from '../../../../svgs/LinkedinWhite';
import ThankYou from '../../../../public/images/uploads/thank-you.svg';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['thankYou-section']}>
      <div className={styles['container-small']}>
        <div className={styles['section-mainpanel']}>
          <div className={styles.contact}>
            <div className={styles['contact-list']}>
              <div className={styles['contact-list-headline']}>
                <h4>Contact us</h4>
              </div>
              <div className={styles['contact-list-subHeadline']}>
                <a href="mailto:info@aimit.company">info@aimit.company</a>
                <a href="tel:041 122101">041 122101</a>
              </div>
              <ul>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="https://t.me/aimitcompany">
                    <TelegramWhite />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/qr/6P4LEJ7C5SRQB1?autoload=1&app_absent=0"
                  >
                    <WhatsappWhite />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="viber://add?number=37441122101"
                  >
                    <WhatsappWhiteBig />
                  </a>
                </li>
                <li>
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
            <div className={styles['contact-list']}>
              <div className={styles['contact-list-headline']}>
                <h4>Follow us</h4>
              </div>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/aimitcompany"
                  >
                    <FaceBookWhite />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/aimitcompany"
                  >
                    <InstagramWhite />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/aimit-company"
                  >
                    <LinkedinWhite />
                  </a>
                </li>
                {/* todo */}
                {/* <li> */}
                {/*  <a href="#"> */}
                {/*    <BehanceWhite /> */}
                {/*  </a> */}
                {/* </li> */}
              </ul>
            </div>
          </div>
          <div className={styles['contact-message']}>
            <div className={styles['thankYou-Image']}>
              <Image src={ThankYou} fill="layout" />
            </div>
            <div className="section-heading">
              <h3>Thank you</h3>
            </div>
            <div className={styles['section-subheading']}>
              <p>We will contact you soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
