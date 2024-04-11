import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Head from 'next/head';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';
import Form from './components/Form';
import ApplyButton from './components/ApplyButton';
import Contact from '../../../../components/Contact';
import InstagramSwiper from '../../../Careers/components/Instagram/components/InstagramSwiper';
import { Style } from './Constants/constants';
import { socialNetworkCareersUrl } from '../../../../constants/constants';
import styles from './style.module.scss';

export const View = ({
  isOpen = false,
  toggleModal = () => {},
  showAccordion,
  setShowAccordion,
  setAccordionContentHeight,
  accordionContentHeight,
  title,
  content,
  routerId,
}) => {
  return (
    <>
      <Head>
        <title>{`Aimit Company | ${title}`}</title>
        <meta name="description" content={`Aimit Company | ${content}`} />
      </Head>
      <section className={styles['position-section']}>
        <div className="container">
          <div className={styles['position-mainpanel']}>
            <ApplyButton isOpen={isOpen} toggleModal={toggleModal} />
            <Modal
              style={Style}
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
            >
              <Form id="1" />
            </Modal>
            <div className={styles['job-description']}>
              <div className={styles['position-heading']}>
                <div className={`section-heading ${styles['position-heading-inner']}`}>
                  <h1>{title}</h1>
                </div>
                <div className={styles['accordion-overlay']}>
                  <div
                    onClick={(e) => {
                      setAccordionContentHeight(e.target.nextSibling.firstChild.offsetHeight);
                      setShowAccordion((prev) => !prev);
                    }}
                    className={styles['share-icon']}
                  />
                  <div
                    className={styles['accordion-hidden']}
                    style={{
                      height: showAccordion ? `${accordionContentHeight + 77}px` : 0,
                    }}
                  >
                    <div>
                      <ul>
                        <li>
                          <FacebookShareButton
                            url={`${socialNetworkCareersUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.facebook}`}
                          />
                        </li>
                        <li>
                          <TelegramShareButton
                            url={`${socialNetworkCareersUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.telegram}`}
                          />
                        </li>
                        <li>
                          <WhatsappShareButton
                            url={`${socialNetworkCareersUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.whatsapp}`}
                          />
                        </li>
                        <li>
                          <ViberShareButton
                            url={`${socialNetworkCareersUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.viber}`}
                          />
                        </li>
                        <li>
                          <LinkedinShareButton
                            url={`${socialNetworkCareersUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.linkedin}`}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles['job-description-text']}
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </div>
            <div className={styles['apply-job']}>
              <Form id="2" />
            </div>
          </div>
        </div>
        <InstagramSwiper />
        <Contact name="Contacts" />
      </section>
    </>
  );
};
View.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  showAccordion: PropTypes.bool,
  setShowAccordion: PropTypes.func,
  accordionContentHeight: PropTypes.number,
  setAccordionContentHeight: PropTypes.func,
  content: PropTypes.string,
  title: PropTypes.string,
  routerId: PropTypes.string,
};
