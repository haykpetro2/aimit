import React from 'react';
import Head from 'next/head';
import HeroSection from '../../components/SerivecesHeroSection';
import ContactForFree from '../../components/ContactForFree';
import SupportLevel from './components/SupportLevel';
import Icon from '../../svgs/SupportPage';
import ServiceInfo from '../../components/ServiceInfoBlock';
import Tabs from '../../components/Tabs';
import { SupportTabsList, SupportInfoBlockList } from './Constants/constants';
import styles from './style.module.scss';

export const View = () => {
  const titleText = 'Aimit Company | Support';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Support" />
      </Head>
      <HeroSection
        title="Support"
        icon={Icon()}
        description="Support - Aside from the obvious design beauty, and website convenience,
                     AimIt captures the visitor's attention with multiple methods of communication and support.
                     A notable feature is how the Support page is embedded into the AimIt portal. This makes the page more accessible
                     to the user and saves your precious time. It is user-friendly and provides info about what exact benefits for your
                     business with our tech support you can experience, support levels, and design consultation, besides the 'Get in Touch'
                     section which gives you a fantastic opportunity that helps businesses submit their ideas directly to the company for
                     consideration or just get in touch."
      />
      <Tabs tabsList={SupportTabsList} />
      <ServiceInfo
        title="Benefits for your business with our tech support"
        dataList={SupportInfoBlockList}
      />
      <SupportLevel />

      <div className={styles['contact-us']}>
        <ContactForFree
          title="Contact us for a free Design consultation"
          description="Fill out the form to receive a free consultation
                     and find out how Aimit’s can help your business grow."
        />
      </div>
    </>
  );
};
