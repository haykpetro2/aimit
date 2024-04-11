import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Typography from './components/Typography';
import MoulkUi from './components/MoulkUi';
import Colors from './components/Colors';
import DeliveryApp from './components/DeliveryApp';
import Feedback from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';
import ContactForFree from '../../components/ContactForFree';

export const View = () => {
  const titleText = 'Aimit Company | Case study | MoulkDelivery';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | MoulkDelivery" />
      </Head>
      <HeroSection />
      <About />
      <Typography />
      <MoulkUi />
      <Colors />
      <DeliveryApp />
      <Feedback />
      <CaseStudies />
      <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
    </>
  );
};

View.propTypes = {
  pathname: PropTypes.string,
};
