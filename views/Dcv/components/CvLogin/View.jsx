import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './style.module.scss';

export const View = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <section data-aos="zoom-in" className={styles['login-section']} />;
};
