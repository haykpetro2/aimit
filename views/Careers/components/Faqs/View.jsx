import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ accordionItems, toggleAccordion, descriptionHeight, t }) => {
  return (
    <section className={styles['faqs-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('faqs')}</h2>
        </div>
        <div className={styles['faqs-section-mainpanel']}>
          <div className={styles['accordion-items']}>
            {accordionItems?.map(({ id, isOpen, name, description }) => (
              <div
                key={id}
                className={`${styles['accordion-item']}  ${isOpen ? styles.openItem : ''}`}
                onClick={(e) => toggleAccordion(e, id)}
              >
                <div className={`${styles['accordion-item-name']} `}>
                  <h4>{t(name)}</h4>
                </div>
                <div
                  className={styles['accordion-item-description']}
                  style={{ height: isOpen ? descriptionHeight + 25 : 0 }}
                >
                  <p>{t(description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
View.propTypes = {
  accordionItems: PropTypes.array,
  toggleAccordion: PropTypes.func,
  t: PropTypes.func,
  descriptionHeight: PropTypes.number,
};
