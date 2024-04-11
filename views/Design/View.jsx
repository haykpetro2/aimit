import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import DesignServices from './components/DesignServices';
import ContactForFree from '../../components/ContactForFree';
import DeliverServices from './components/DeliverServices';
import OurClients from './components/OurClients';
import FeaturedContent from '../../components/ServicesBlogSlider';
import Culture from '../../components/Culture';
import CaseStudies from '../Home/components/CaseStudies';

import styles from '../Development/style.module.scss';

export const View = () => {
  const titleText = 'Aimit Company | Design';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Design" />
      </Head>
      <HeroSection />
      <DesignServices />
      <ContactForFree
        title="Contact us for a free Design consultation"
        description="Fill out the form to receive a free consultation
                     and find out how Aimit’s can help your business grow."
      />
      <DeliverServices />
      <CaseStudies title="Our Design Success" />
      <OurClients />
      <div className={styles['working-process']}>
        <Culture
          title="Working process"
          description="We’re a team of passionate,
                     highly-skilled professionals changing the world for the better,
                     one piece of software at a time. We make meaningful products that
                     empower social responsibility and positive change."
        />
      </div>
      <div className={styles['featured-content']}>
        <FeaturedContent />
      </div>
      <ContactForFree
        title="Contact us for a free Design consultation"
        description="Fill out the form to receive a free consultation
                     and find out how Aimit’s can help your business grow."
      />
    </>
  );
};
