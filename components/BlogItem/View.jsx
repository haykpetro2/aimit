import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './style.module.scss';

export const View = ({
  id,
  title = '',
  category = [],
  description = '',
  authorImage,
  image,
  authorName = '',
  showDate = '',
  imageUrl,
  t,
}) => {
  return (
    <div className={styles['blog-link']}>
      <Link href={`/blog/${id}`} passHref>
        <div className={styles['blog-item-overlay']}>
          <div className={styles['blog-item']}>
            <div
              className={styles['blog-item-image']}
              style={{ backgroundImage: `url(${imageUrl}/${image})` }}
            />
            <div className={styles['blog-item-footer']}>
              <div className={styles['blog-item-name']}>
                <h3>{t(title)}</h3>
              </div>
              <div className={styles['blog-item-categories']}>
                {category?.map((el, index) => (
                  <div key={index} className={styles['blog-item-category']}>
                    <p>{el}</p>
                  </div>
                ))}
              </div>
              <div
                className={styles['blog-item-description']}
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <div className={styles['blog-author']}>
                <div className={styles['blog-author-image']}>
                  <Image
                    src={
                      authorImage
                        ? `${imageUrl}/${authorImage}`
                        : '/images/uploads/defaultBlogAvatar.png'
                    }
                    layout="fill"
                  />
                </div>
                <div className={styles['blog-author-infos']}>
                  <h4 className={styles['blog-author-name']}>
                    {t('by')} {t(authorName)}
                  </h4>
                  <p className={styles['blog-date']}>{t(showDate)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

View.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.array,
  authorImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  authorName: PropTypes.string,
  showDate: PropTypes.string,
  handleLink: PropTypes.func,
  imageUrl: PropTypes.string,
  image: PropTypes.string,
  t: PropTypes.func,
};
