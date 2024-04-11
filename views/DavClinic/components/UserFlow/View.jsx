import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { SCREENS } from '../../../../constants/constants';
import styles from './style.module.scss';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { isClient } from '../../../../config/helpers';

export const View = ({ t, render }) => {
  const isTablet = useMediaQuery(SCREENS.isTablet);
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);
  useEffect(() => {
    if (isClient() && render) {
      const firstSection = document.getElementById('first-list');
      const lastSection = document.getElementById('last-list');
      const firstSectionWidth = firstSection ? firstSection.offsetWidth / 2 : 0;
      const lastSectionWidth = lastSection ? lastSection.offsetWidth / 2 : 0;
      setPaddingLeft(firstSectionWidth);
      setPaddingRight(lastSectionWidth);
    }
  }, [render]);

  return (
    <section className={styles['userFlow-section']}>
      <div className="container">
        <div className={styles['hero-headline']}>
          <h3>{t('userFlow')}</h3>
        </div>
        {isTablet ? (
          <div className={styles['userFlow-image']}>
            <Image layout="fill" src="/images/uploads/userFlow.png" />
          </div>
        ) : (
          <div className={styles['user-flow-table-overlay']}>
            {render && (
              <div className={styles['user-flow-table']}>
                <div className={styles['table-headline']}>
                  <h3>home page</h3>
                </div>
                <div className={styles['table-body']}>
                  <div
                    style={{ paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px` }}
                    className={styles['table-line']}
                  />
                  <div
                    id="first-list"
                    className={`${styles['table-listing']} ${styles['table-listing-about']}`}
                  >
                    <ul>
                      <li>
                        <div className={styles['list-headline']}>
                          <div className={styles['section-name']}>
                            <h3>Section</h3>
                          </div>
                          <div className={styles['section-desc']}>
                            <p>about us</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>services</p>
                          <p>news</p>
                          <p>branches</p>
                          <p>partners</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className={`${styles['table-listing']} ${styles['table-listing-analyses']}`}>
                    <ul>
                      <li>
                        <div className={styles['list-headline']}>
                          <div className={styles['section-name']}>
                            <h3>Section</h3>
                          </div>
                          <div className={styles['section-desc']}>
                            <p>analyses and prices</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={styles['anlalyses-structrue']}>
                          <div className={styles[['section-info']]}>
                            <ul>
                              <li>
                                <div className={styles['section-texts']}>
                                  <p>analyses and prices</p>
                                </div>
                              </li>
                              <li>
                                <div className={styles['section-texts']}>
                                  <p>calculator</p>
                                </div>
                              </li>
                              <li>
                                <div className={styles['section-texts']}>
                                  <p>print</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className={styles[['section-info']]}>
                            <ul>
                              <li>
                                <div className={styles['section-texts']}>
                                  <p>histological referral</p>
                                </div>
                              </li>
                              <li>
                                <div className={styles['section-texts']}>
                                  <p>download</p>
                                </div>
                              </li>
                              <li>
                                <div className={styles['section-texts']}>
                                  <p>print</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className={`${styles['table-listing']} ${styles['table-listing-news']}`}>
                    <ul>
                      <li>
                        <div className={styles['list-headline']}>
                          <div className={styles['section-name']}>
                            <h3>Section</h3>
                          </div>
                          <div className={styles['section-desc']}>
                            <p>news</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>News 1</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>News 2</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>News 3</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>News 4</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>News 5...100</p>
                        </div>
                      </li>
                    </ul>
                    <div className={styles['share-network']}>
                      <div className={styles['share-network-text-overlay']}>
                        <div className={styles['share-network-text']}>
                          <p>Share Network</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles['table-listing']} ${styles['table-listing-contact']}`}>
                    <ul>
                      <li>
                        <div className={styles['list-headline']}>
                          <div className={styles['section-name']}>
                            <h3>Section</h3>
                          </div>
                          <div className={styles['section-desc']}>
                            <p>contacts</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>Contact 1</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>Contact 2</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>Contact 3</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>Contact 4</p>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>Contact 5...100</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="last-list"
                    className={`${styles['table-listing']} ${styles['table-listing-contact']}`}
                  >
                    <ul>
                      <li>
                        <div className={styles['list-headline']}>
                          <div className={styles['section-name']}>
                            <h3>Section</h3>
                          </div>
                          <div className={styles['section-desc']}>
                            <p>covid 19</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className={styles[['section-texts']]}>
                          <p>
                            prace,
                            <br />
                            where to take the tests, content
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

View.propTypes = {
  t: PropTypes.func,
  render: PropTypes.bool,
};
