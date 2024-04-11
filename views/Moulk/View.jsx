import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Architecture from './components/Architecture';
import ArchitectureView from './components/ArchitectureView';
import Library from './components/Library';
import ViewPartials from './components/ViewPartials';
import CaseStudies from '../Home/components/CaseStudies';
import Feedback from '../Home/components/Feedback';
import ContactForFree from '../../components/ContactForFree';

export const View = () => {
  const titleText = 'Aimit Company | Case study | Moulk.app';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | Moulk.app" />
      </Head>
      <HeroSection />
      <About />
      <Architecture />
      <ArchitectureView />
      <Library />
      <ViewPartials />
      <Feedback />
      <CaseStudies />
      <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
    </>
  );
};
