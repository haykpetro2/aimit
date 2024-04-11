import React from 'react';
import Head from 'next/head';
import HeroSection from '../../components/SerivecesHeroSection';
import Adds from './components/Adds';
import DevopsExpertise from '../../components/ServiceInfoBlock';
import ContactForFree from '../../components/ContactForFree';
import Tabs from '../../components/Tabs';
import Icon from '../../svgs/CloudDevopsPage';
import { CloudDevopsTabsList, CloudDevopsInfoBlockList } from './Constants/constants';
import styles from './style.module.scss';

export const View = () => {
  const titleText = 'Aimit Company | Cloud devops';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Cloud devops" />
      </Head>
      <HeroSection
        title="Cloud DevOps"
        description="Our DevOps engineer fantastically and mesmerizingly goes beyond continuous integration and continuous delivery
                    (CI/CD) to enable near-instantaneous deployment of products and services in the cloud."
        icon={Icon()}
      />
      <Tabs tabsList={CloudDevopsTabsList} />
      <Adds />
      <DevopsExpertise title="DevOps expertise" dataList={CloudDevopsInfoBlockList} />
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
