import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Typography from './components/Typography';
import MainPage from './components/MainPage';
import Catalogue from './components/Catalogue';
import ProductCard from './components/ProductCard';
import ShoppingCard from './components/ShoppingCard';
import Payment from './components/Payment';
import ResponsiveDesign from './components/ResponsiveDesign';
import FeedBack from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';
import ContactForFree from '../../components/ContactForFree';
import styles from './style.module.scss';

export const View = () => {
  const titleText = 'Aimit Company | Case study | Malls.am';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Case study | Malls.am" />
      </Head>
      <HeroSection />
      <About />
      <Typography />
      <MainPage />
      <Catalogue />
      <ProductCard />
      <ShoppingCard />
      <Payment />
      <ResponsiveDesign />
      <div className={styles.informative}>
        <FeedBack />
        <CaseStudies />
        <ContactForFree title="contactForFreeTitle" description="contactForFreeDescription" />
      </div>
    </>
  );
};
