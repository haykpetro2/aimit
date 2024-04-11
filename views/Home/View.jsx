import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import Trustworthy from './components/Trustworthy';
import CaseStudies from './components/CaseStudies';
import WholePackage from './components/WholePackages';
import Feedback from './components/Feedback';
import Numbers from './components/Numbers';
import Blog from './components/Blog';
import Culture from '../../components/Culture';
import GetInTouch from '../../components/GetInTouch';
import Contact from '../../components/Contact';
import Industries from './components/Industries';

export const View = ({ t, homeBlogData }) => {
  return (
    <>
      <Head>
        <title>Aimit Company</title>
      </Head>
      <HeroSection />
      <Trustworthy />
      <CaseStudies />
      <WholePackage />
      <Industries />
      <Feedback />
      <Numbers />
      <Blog homeBlogData={homeBlogData} />
      <Culture title="culture" description="cultureText" />
      <GetInTouch />
      <Contact title={t('contacts')} />
    </>
  );
};

View.propTypes = {
  t: PropTypes.func,
  homeBlogData: PropTypes.array,
};
