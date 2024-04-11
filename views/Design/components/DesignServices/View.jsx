import React from 'react';
import PropTypes from 'prop-types';
import { designList } from './Constants/constants';
import styles from './style.module.scss';

export const View = ({ handleToggleOpen, opened, tab, handleToggleClose }) => {
  return (
    <section id="design" className={styles['design-section']}>
      <div className="container">
        <div className="section-heading">
          <h1>UX / UI Design</h1>
        </div>
        <div className={styles['design-section-mainpanel']}>
          {designList.map(({ id, title, description }) => {
            return (
              <div key={id} id={id} className={`col_ ${styles['design-item-overlay']}`}>
                <div
                  className={`${styles['design-item']} ${
                    styles[tab === `${id}` ? 'selected' : '']
                  }`}
                >
                  <div className={styles['design-item-name']}>
                    <h3>{title}</h3>
                  </div>
                  <div
                    className={`${styles['design-item-description']} ${
                      styles[opened[`${id}`] ? 'more-view' : ' ']
                    }`}
                  >
                    <p>{description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      !opened[`${id}`] ? handleToggleOpen(id) : handleToggleClose(id)
                    }
                    className={styles['more-button']}
                  >
                    {!opened[`${id}`] ? 'View More' : 'Less More'}
                  </button>
                  <div className={styles['design-item-info']}>
                    <p>30+ effective redesigns</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
View.propTypes = {
  handleToggleOpen: PropTypes.func,
  handleToggleClose: PropTypes.func,
  opened: PropTypes.object,
  tab: PropTypes.string,
};
