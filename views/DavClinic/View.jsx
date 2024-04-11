import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ContactForFree from '../../components/ContactForFree';
import Users from './components/Users';
import UserFlow from './components/UserFlow';
import Screens from './components/Screens';
import UiKit from './components/UiKit';
import Feedback from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';

export const View = ({ render }) => {
  const titleText = 'Aimit Company | Case study | Davclinic.am';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | Davclinic.am" />
      </Head>
      <HeroSection />
      <About />
      <Users />
      <UserFlow render={render} />
      <Screens />
      <UiKit />
      <Feedback />
      <CaseStudies />
      <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
    </>
  );
};

View.propTypes = {
  render: PropTypes.bool,
};
