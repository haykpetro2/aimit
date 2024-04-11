import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../components/Contact';
import GetInTouch from '../../components/GetInTouch';
import { useTranslations } from '../../contexts/translation.context';

export const View = () => {
  const { t } = useTranslations();
  const titleText = `Aimit Company | ${t('contactUs')}`;
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content={`Aimit Company | ${t('contactUs')}`} />
      </Head>
      <GetInTouch />
      <Contact />
    </>
  );
};

View.propTypes = {
  t: PropTypes.func,
};
