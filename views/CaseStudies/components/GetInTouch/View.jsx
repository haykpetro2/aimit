import React from 'react';
import styles from './style.module.scss';
import Form from '../../../../components/Form';

export const View = () => {
  return (
    <section className={styles['contact-section']}>
      <div className="container">
        <div className={styles['contact-section-mainpanel']}>
          <div className={styles['contact-section-descriptions']}>
            <div className="section-heading">
              <h3>Shortly About Your Project </h3>
            </div>
            <div className={`description ${styles['section-description']}`}>
              <p>
                Do you want Aimit’s team of IT experts to implement a similar case for you? Fill out
                the form below, and a specialist will contact you to provide a free consultation!
              </p>
            </div>
          </div>
          <Form id="5" />
        </div>
      </div>
    </section>
  );
};
