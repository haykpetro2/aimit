import Link from 'next/link';
import React from 'react';
import Arrow from '../../../../svgs/Arrow';
import DesignIcon from '../../../../svgs/DesignIcon';
import DevelopmentIcon from '../../../../svgs/DevelopmentIcon';
import MarketingIcon from '../../../../svgs/MarketingIcon';
import CloudIcon from '../../../../svgs/CloudIcon';
import SupportIcon from '../../../../svgs/SupportIcon';
import styles from './style.module.scss';

export const View = () => {
  return (
    <div className={styles['mobile-view']}>
      <div className={styles['mobileView-name']}>
        <Link href="/">
          <span className={styles['link-name']}>
            <span>
              <Arrow />
            </span>
            Services
          </span>
        </Link>
      </div>
      <div className={styles['sub-lists']}>
        <ul>
          <li>
            <Link href="/design">
              <a>
                <span className={styles['link-icon']}>
                  <DesignIcon />
                </span>
                Design
              </a>
            </Link>
          </li>
          <li>
            <Link href="/development">
              <a>
                <span className={styles['link-icon']}>
                  <DevelopmentIcon />
                </span>
                Development
              </a>
            </Link>
          </li>
          <li>
            <Link href="/marketing">
              <a>
                <span className={styles['link-icon']}>
                  <MarketingIcon />
                </span>
                Marketing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cloud-devops">
              <a>
                <span className={styles['link-icon']}>
                  <CloudIcon />
                </span>
                Cloud DevOps
              </a>
            </Link>
          </li>
          <li>
            <Link href="/support">
              <a>
                <span className={styles['link-icon']}>
                  <SupportIcon />
                </span>
                Support
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
