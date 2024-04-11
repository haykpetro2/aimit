import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import HeroSection from './components/HeroSection';
import LatestArticles from './components/LatestArticles';
import Articles from '../../components/ReadMoreBlog';
import Video from './components/Video';
import Vacancies from './components/Vacancies';
import Contacts from '../../components/Contact';
import { useTranslations } from '../../contexts/translation.context';

export const View = ({ latestRes, vacanciesRes, articlesRes }) => {
  const { t } = useTranslations();

  const titleText = `Aimit Company | ${t('blog')}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={`Aimit Company | ${t('blog')}`} />
      </Head>
      <HeroSection />
      <LatestArticles data={latestRes} />
      <Articles title="Articles" articlesRes={articlesRes} />
      <Video />
      <Vacancies data={vacanciesRes} />
      <Contacts title="contacts" />
    </>
  );
};

View.propTypes = {
  t: PropTypes.func,
  latestRes: PropTypes.array,
  vacanciesRes: PropTypes.array,
  articlesRes: PropTypes.array,
};
