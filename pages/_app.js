import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'next/router';

import '../styles/global.scss';
import Loader from '../components/Loader';
import TranslationProvider from '../contexts/translation.context';

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <TranslationProvider>
      <Component {...pageProps} />;
    </TranslationProvider>
  );
};
export default MyApp;
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
