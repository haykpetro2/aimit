import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import SectionLetters from './components/SectionLetters';
import MainPageSection from './components/MainPageSection';
import CvLogin from './components/CvLogin';
import CvSteps from './components/CvSteps';
import CvAllSteps from './components/CvAllSteps';
import Elements from './components/Elements';
import MobileLogin from './components/MobileLogin';
import MobileSteps from './components/MobileSteps';
import MobileCv from './components/MobileCv';

export const View = () => {
  const titleText = 'Aimit Company | D-cv';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Design" />
      </Head>
      <HeroSection />
      <SectionLetters />
      <MainPageSection />
      <CvLogin />
      <CvSteps />
      <CvAllSteps />
      <Elements />
      <MobileLogin />
      <MobileSteps />
      <MobileCv />
    </>
  );
};
