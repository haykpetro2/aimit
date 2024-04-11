import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ title, dataList }) => {
  return (
    <section className={styles['devops-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className={styles['devops-section_mainpanel']}>
          {dataList?.map(({ id, title, description }) => (
            <div key={id} className={`col_ ${styles['devops-item-overlay']}`}>
              <div className={styles['devops-item']}>
                <div className={styles['devops-item-headline']}>
                  <h2>{title}</h2>
                </div>
                <div className={styles['devops-item-description']}>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  dataList: PropTypes.array,
  title: PropTypes.string,
};
