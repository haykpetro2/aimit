import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../../../../components/BlogItem';
import styles from './style.module.scss';

export const View = ({ latestArticlesData, locale, t }) => {
  return (
    <section className={styles['articles-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('latestArticles')}</h2>
        </div>
        <div className={styles['articles-section_mainpanel']}>
          <div className={styles.articleItems}>
            {latestArticlesData?.map(
              ({
                id,
                [`title_${locale}`]: title,
                title_en,
                author_name,
                author_image,
                image,
                [`category_${locale}`]: category,
                category_en,
                [`content_${locale}`]: content,
                content_en,
                updated_at,
              }) => {
                return (
                  <div key={id} className={`col_ ${styles['article-item']}`}>
                    <Blog
                      id={id}
                      title={title || title_en}
                      authorImage={author_image}
                      image={image}
                      category={category || category_en}
                      authorName={author_name}
                      date={updated_at}
                      description={content || content_en}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  latestArticlesData: PropTypes.array,
  locale: PropTypes.string,
  t: PropTypes.func,
};
