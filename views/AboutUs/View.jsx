import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import Visions from './components/Visions';
import Team from './components/Team';
import Culture from '../../components/Culture';
import Contact from '../../components/Contact';
import { useTranslations } from '../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  const titleText = `Aimit Company | ${t('aboutUs')}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={`Aimit Company | ${t('aboutUs')}`} />
      </Head>
      <HeroSection />
      <Visions />
      <Team />
      <Culture
        title="Culture"
        description="We’re a team of passionate, highly-skilled professionals changing the world for the better, one piece of software at a time. We make meaningful products that empower social responsibility and positive change."
      />
      <Contact title="ourOffices" />
    </>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
