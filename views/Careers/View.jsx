import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import HeroSection from './components/HeroSection';
import Vacancies from './components/Vacancies';
import HiringProcess from './components/HiringProcess';
import Faqs from './components/Faqs';
import Instagram from './components/Instagram';
import Contact from '../../components/Contact';
import { useTranslations } from '../../contexts/translation.context';

export const View = ({ vacanciesData }) => {
  const { t } = useTranslations();
  const titleText = `Aimit Company | ${t('careers')}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={`Aimit Company | ${t('careers')}`} />
      </Head>
      <HeroSection />
      <Vacancies vacanciesData={vacanciesData} />
      <HiringProcess />
      <Faqs />
      <Instagram />
      <Contact title="Contacts" />
    </>
  );
};
View.propTypes = {
  t: PropTypes.func,
  vacanciesData: PropTypes.array,
};
