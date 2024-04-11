import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';
import { socialNetworkBlogUrl } from '../../../../constants/constants';
import styles from './style.module.scss';

export const View = ({
  showAccordion,
  setShowAccordion,
  setAccordionContentHeight,
  accordionContentHeight,
  imageUrl,
  title,
  authorName,
  authorImage,
  content,
  date,
  singleBlogLatestArticles,
  locale,
  routerId,
}) => {
  const titleText = `Aimit Company | ${title}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <section className={styles['blogContent-section']}>
        <div className="container">
          <div className={styles['blogContent-mainpanel']}>
            <div className={styles['content-description']}>
              <div className={styles['content-heading']}>
                <div className={styles['content-heading-inner']}>
                  <h1>{title}</h1>
                </div>
                <div className={styles['accordion-overlay']}>
                  <div
                    onClick={(e) => {
                      setAccordionContentHeight(e.target.nextSibling.firstChild.offsetHeight);
                      setShowAccordion((prev) => !prev);
                    }}
                    className={styles['share-icon']}
                  />
                  <div
                    className={styles['accordion-hidden']}
                    style={{ height: showAccordion ? `${accordionContentHeight + 77}px` : 0 }}
                  >
                    <div>
                      <ul>
                        <li>
                          <FacebookShareButton
                            url={`${socialNetworkBlogUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.facebook}`}
                          />
                        </li>
                        <li>
                          <TelegramShareButton
                            url={`${socialNetworkBlogUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.telegram}`}
                          />
                        </li>
                        <li>
                          <WhatsappShareButton
                            url={`${socialNetworkBlogUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.whatsapp}`}
                          />
                        </li>
                        <li>
                          <ViberShareButton
                            url={`${socialNetworkBlogUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.viber}`}
                          />
                        </li>
                        <li>
                          <LinkedinShareButton
                            url={`${socialNetworkBlogUrl}/${routerId}`}
                            className={`${styles['social-icon']} ${styles.linkedin}`}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                  <h4 className={styles['blog-author-name']}>{authorName}</h4>
                  <p className={styles['blog-date']}> {date}</p>
                </div>
                <div
                  className={styles['content-description-text']}
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                />
              </div>
            </div>
            <aside className={styles['blogContent-sidebar']}>
              <div className={styles['sidebar-headline']}>
                <h3>Articles</h3>
              </div>
              {singleBlogLatestArticles?.map(({ id, [`title_${locale}`]: title, title_en }) => {
                return (
                  <div key={id} className={styles['sidebar-listing']}>
                    <ul>
                      <li>
                        <a href={`/blog/${id}`}>{title || title_en}</a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

View.propTypes = {
  spliceLatestArticlesList: PropTypes.array,
  showAccordion: PropTypes.bool,
  setShowAccordion: PropTypes.func,
  accordionContentHeight: PropTypes.number,
  setAccordionContentHeight: PropTypes.func,
  singleBlogData: PropTypes.array,
  locale: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  routerId: PropTypes.string,
  singleBlogLatestArticles: PropTypes.array,
};
