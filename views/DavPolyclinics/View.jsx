import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Technologies from './components/Technologies';
import MainPage from './components/MainPage';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Doctors from './components/Doctors';
import News from './components/News';
import PriceList from './components/PriceList';
import Covid from './components/Covid';
import MobilDark from './components/MobileDark';
import MobilLight from './components/MobileLight';
import FeedBack from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';
import ContactForFree from '../../components/ContactForFree';

export const View = () => {
  const titleText = 'Aimit Company | Case study | DavPolyclinics';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | DavPolyclinics" />
      </Head>
      <HeroSection />
      <About />
      <Technologies />
      <MainPage />
      <Services />
      <Schedule />
      <Doctors />
      <News />
      <PriceList />
      <Covid />
      <MobilLight />
      <MobilDark />
      <FeedBack />
      <CaseStudies />
      <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
    </>
  );
};
