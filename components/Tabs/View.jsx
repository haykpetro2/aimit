import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './style.module.scss';

export const View = ({
  tabsList,
  toggleState,
  toggleTab,
  accordionItems,
  toggleAccordion,
  descriptionHeight,
  isTablet,
  tab,
}) => {
  return (
    <div className={styles['tabs-overlay']}>
      {isTablet ? (
        <section id={tab} className={styles['faqs-section']}>
          <div className="container">
            <div className={styles['faqs-section-mainpanel']}>
              <div className={styles['accordion-items']}>
                {accordionItems?.map(
                  ({ id, isOpen, name, description, images, imagesTitle, imagesDescription }) => {
                    return (
                      <div
                        key={id}
                        className={`${styles['accordion-item']}  ${
                          isOpen ? `${styles.openItem}` : ''
                        }`}
                        onClick={(e) => toggleAccordion(e, id)}
                      >
                        <div className={`${styles['accordion-item-name']} `}>
                          <h4>{name}</h4>
                        </div>
                        <div
                          className={styles['accordion-item-description']}
                          style={{ height: isOpen ? descriptionHeight + 25 : 0 }}
                        >
                          <div>
                            {description && (
                              <div className={styles['tab-description']}>
                                <p>{description}</p>
                              </div>
                            )}
                            <div className={styles['tab-images']}>
                              {images &&
                                images.map((item) => (
                                  <div className={styles['tab-image']}>
                                    <Image
                                      layout="fill"
                                      key={id}
                                      height={200}
                                      width={200}
                                      src={item}
                                    />
                                  </div>
                                ))}
                            </div>

                            {imagesTitle && (
                              <div className={styles['tab-imagesTitle']}>
                                <h3>{imagesTitle}</h3>
                              </div>
                            )}
                            {imagesDescription && (
                              <div className={styles['tab-description']}>
                                <p>{imagesDescription}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id={tab} className={styles['tabs-section']}>
          <div className="container">
            <div className={styles['tabs-mainpanel']}>
              <div className={styles['bloc-tabs']}>
                {tabsList?.map(({ id, title }) => {
                  return (
                    <button
                      type="button"
                      key={id}
                      className={
                        toggleState === id ? `${styles['active-tab']} ${styles.tab}` : styles.tab
                      }
                      onClick={() => toggleTab(id)}
                    >
                      {title}
                    </button>
                  );
                })}
              </div>
              <div className="content-tabs">
                {tabsList?.map(
                  ({ id, name, description, images, imagesTitle, imagesDescription }) => {
                    return (
                      <div
                        key={`${id}${name}`}
                        className={
                          toggleState === id
                            ? `${styles['active-content']} ${styles.content}`
                            : styles.content
                        }
                      >
                        {name && (
                          <div className={styles['tab-headline']}>
                            <h2>{name}</h2>
                          </div>
                        )}
                        {description && (
                          <div className={styles['tab-description']}>
                            <p>{description}</p>
                          </div>
                        )}
                        <div className={styles['tab-images']}>
                          {images &&
                            images.map((item, index) => (
                              <div key={index} className={styles['tab-image']}>
                                <Image layout="fill" key={id} height={200} width={200} src={item} />
                              </div>
                            ))}
                        </div>

                        {imagesTitle && (
                          <div className={styles['tab-imagesTitle']}>
                            <h3>{imagesTitle}</h3>
                          </div>
                        )}
                        {imagesDescription && (
                          <div className={styles['tab-description']}>
                            <p>{imagesDescription}</p>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

View.propTypes = {
  toggleState: PropTypes.number,
  toggleTab: PropTypes.func,
  tabsList: PropTypes.array,
  accordionItems: PropTypes.array,
  toggleAccordion: PropTypes.func,
  descriptionHeight: PropTypes.number,
  isTablet: PropTypes.bool,
  tab: PropTypes.string,
};
