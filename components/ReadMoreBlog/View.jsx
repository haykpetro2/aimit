import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './components/ArticleList';
import styles from './style.module.scss';

export const View = ({
  isMore,
  handleMoreLimit,
  handleInitialLimit,
  articlesData,
  t,
  locale,
  title,
  dataCount,
}) => {
  return (
    <section id="articles" className={styles['articles-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
        </div>
        <div className={styles['articles-section_mainpanel']}>
          <div className={styles.articleItems}>
            <ul className={styles['list-items']}>
              {articlesData?.length ? (
                articlesData.map(
                  ({
                    id,
                    [`title_${locale}`]: text,
                    title_en,
                    created_at,
                    [`content_${locale}`]: content,
                    content_en,
                  }) => {
                    return (
                      <div key={id}>
                        <ListItem
                          id={id}
                          title={text || title_en}
                          date={created_at}
                          description={content || content_en}
                        />
                      </div>
                    );
                  }
                )
              ) : (
                <h1>Nothing found for your search </h1>
              )}
            </ul>
          </div>
          <div className={styles['view-more']}>
            {dataCount > 10 &&
              (isMore ? (
                <button type="button" onClick={handleMoreLimit}>
                  {t('loadMore')}
                </button>
              ) : (
                <button type="button" onClick={handleInitialLimit}>
                  {t('back')}
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  handleMoreLimit: PropTypes.func,
  isMore: PropTypes.bool,
  handleInitialLimit: PropTypes.func,
  articlesData: PropTypes.array,
  t: PropTypes.func,
  title: PropTypes.string,
  locale: PropTypes.string,
  dataCount: PropTypes.number,
};
