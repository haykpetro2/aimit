import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import BackToPage from './components/BackToPage';
import PositionDetails from './components/BlogContent';
import Contact from '../../components/Contact';
import LatestArticles from '../Blog/components/LatestArticles';

export const View = ({
  routerId,
  singleBlogData,
  singleBlogLatestArticles,
  title,
  content,
  shareImage,
  shareImageUrl,
}) => {
  return (
    <>
      <Head>
        <meta property="og:image" content={`${shareImageUrl}/${shareImage}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
      </Head>
      <BackToPage />
      <PositionDetails
        singleBlogData={singleBlogData}
        singleBlogLatestArticles={singleBlogLatestArticles}
      />
      <LatestArticles routerId={routerId} data={singleBlogLatestArticles} />
      <Contact />
    </>
  );
};

View.propTypes = {
  routerId: PropTypes.string,
  singleBlogData: PropTypes.object,
  singleBlogLatestArticles: PropTypes.array,
  content: PropTypes.string,
  title: PropTypes.string,
  shareImage: PropTypes.string,
  shareImageUrl: PropTypes.string,
};
