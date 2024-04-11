import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Catalogue from './components/Catalogue';
import ProductCard from './components/ProductCard';
import ShoppingCard from './components/ShoppingCard';
import Screens from './components/Screens';
import Feedback from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';
import ContactForFree from '../../components/ContactForFree';

export const View = () => {
  const titleText = 'Aimit Company | Case study | Mankan.am';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | Mankan.am" />
      </Head>
      <HeroSection />
      <About />
      <Catalogue />
      <ProductCard />
      <ShoppingCard />
      <Screens />
      <CaseStudies />
      <Feedback />
      <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
    </>
  );
};
