import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import About from './components/About';
import HowWork from './components/Work';
import Steps from './components/Steps';
import Screens from './components/Screens';
import Technologies from './components/Technologies';
import FeedBack from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';
import ContactForFree from '../../components/ContactForFree';

export const View = () => {
  const titleText = 'Aimit Company | Case study | Moulk Crm';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | Moulk Crm" />
      </Head>
      <HeroSection />
      <About />
      <HowWork />
      <Steps />
      <Screens />
      <Technologies />
      <FeedBack />
      <CaseStudies />
      <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
    </>
  );
};
