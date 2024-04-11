import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import CaseStudies from './components/CaseStudies';
import Industries from './components/Industries';
import Contact from '../../components/Contact';
import GetInTouch from './components/GetInTouch';
import { useTranslations } from '../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  const titleText = `Aimit Company | ${t('caseStudies')}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={`Aimit Company | ${t('caseStudies')}`} />
      </Head>
      <CaseStudies />
      <Industries />
      <GetInTouch />
      <Contact title="contacts" />
    </>
  );
};
View.propTypes = {
  t: PropTypes.func,
};
