import React from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { SCREENS } from '../../../../constants/constants';
import styles from './style.module.scss';

export const View = () => {
  const isSmallTablet = useMediaQuery(SCREENS.isSmallTablet);
  return (
    <section className={styles['focus-section']}>
      <div className="container">
        <div className={styles['focus-mainpanel']}>
          <div className={styles['section-small-headline']}>
            <h2>Client Focus</h2>
          </div>
          <div className={styles['client-focus-list']}>
            <ul>
              <li>
                Small Business (10M) <span>60%</span>
              </li>
              <li>
                Medium Business (10M - $1B) <span>30%</span>
              </li>
              <li>
                Large Business (&gt;$1B) <span>10%</span>
              </li>
            </ul>
          </div>
          {!isSmallTablet && (
            <div className={styles['client-focus-percent']}>
              <ul>
                <li>
                  60% <span>Small Business</span>
                </li>
                <li>
                  30% <span>Medium Business</span>
                </li>
                <li>
                  10% <span>Large Business</span>
                </li>
              </ul>
            </div>
          )}

          <div className={styles['section-small-headline']}>
            <h2>Industries Focus</h2>
          </div>
          <div className={styles['industries-focus-list']}>
            <ul>
              <li>
                eCommerce <span>40%</span>
              </li>
              <li>
                Banking <span>10%</span>
              </li>
              <li>
                Healthcare & Medical <span>10%</span>
              </li>
              <li>
                Information Technology <span>10%</span>
              </li>
              <li>
                Financial & Payments <span>10%</span>
              </li>
              <li>
                Bussiness Servises <span>5%</span>
              </li>
              <li>
                Social <span>4%</span>
              </li>
              <li>
                Other Industries <span>1%</span>
              </li>
            </ul>
          </div>
          {!isSmallTablet && (
            <div className={styles['industries-focus-percent']}>
              <ul>
                <li>
                  40% <span>eCommerce</span>
                </li>
                <li>
                  10% <span>Banking</span>
                </li>
                <li>
                  10% <span>Healthcare & Medical</span>
                </li>
                <li>
                  10% <span>Information Technology</span>
                </li>
                <li>
                  10% <span>Financial & Payments</span>
                </li>
                <li>
                  5% <span>Bussiness Servises</span>
                </li>
                <li>
                  4% <span>Social</span>
                </li>
                <li>
                  1% <span>Other Industries</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
