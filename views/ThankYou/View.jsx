import Head from 'next/head';
import React from 'react';
import Header from './components/Header';
import ThankYouContent from './components/ThankYouContent';

export const View = () => {
  const titleText = 'Aimit Company | Thank-you';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={titleText} />
      </Head>
      <Header />
      <ThankYouContent />
    </>
  );
};
