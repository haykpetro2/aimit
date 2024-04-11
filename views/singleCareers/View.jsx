import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import BackToPage from './components/BackToPage';
import PositionDetails from './components/PositionDetails';

export const View = ({ careersSingleData, title, content }) => {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
      </Head>
      <BackToPage />
      <PositionDetails careersSingleData={careersSingleData} />
    </>
  );
};

View.propTypes = {
  careersSingleData: PropTypes.object,
  content: PropTypes.string,
  title: PropTypes.string,
};
