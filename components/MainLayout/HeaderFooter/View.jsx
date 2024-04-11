import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../../ContentWraper';
import styles from './style.module.scss';

export const View = ({ placement, t, isMobile, scroll }) => {
  return placement === 'footer' ? (
    <footer className={`${styles.appFooter}`}>
      {!isMobile ? (
        <div className={styles.footerMenuWrapper}>
          <ContentWrapper placement={placement} />
        </div>
      ) : null}

      <div className={styles.footerCopyRight}>
        <p>{t('allRightsReserved')}</p>
      </div>
    </footer>
  ) : (
    <header className={`${styles.app_header} ${scroll ? 'header-fixed' : ''}`}>
      <ContentWrapper placement={placement} />
    </header>
  );
};

View.propTypes = {
  placement: PropTypes.string,
  t: PropTypes.func,
  isMobile: PropTypes.bool,
  scroll: PropTypes.bool,
};
