import React from 'react';
import Head from 'next/head';
import HeroSection from '../../components/SerivecesHeroSection';
import ContactForFree from '../../components/ContactForFree';
import SearchEngeens from './components/SearchEngeens';
import WeWork from './components/WeWork';
import Icon from '../../svgs/MarketingPage';
import Culture from '../../components/Culture';
import FeedBack from '../Home/components/Feedback';
import ReadMoreBlog from '../../components/ServicesBlogSlider';
import Tabs from '../../components/Tabs';
import { MarketingTabsList } from './Constants/constants';
import styles from './style.module.scss';

export const View = () => {
  const titleText = 'Aimit Company | Marketing';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Marketing" />
      </Head>
      <HeroSection
        title="Marketing"
        description="With Our marketing team you will receive a step-by-step,
                     clear, and detailed strategic plan in short time that will ensure your future growth,
                     plus strategic mentoring to help make your strategy a reality."
        icon={Icon()}
      />
      <Tabs tabsList={MarketingTabsList} />
      <SearchEngeens />
      <WeWork />
      <div className={styles['working-process']}>
        <Culture
          title="Working process"
          description="We’re a team of passionate,
                     highly-skilled professionals changing the world for the better,
                     one piece of software at a time. We make meaningful products that
                     empower social responsibility and positive change."
        />
      </div>

      <FeedBack />
      <ReadMoreBlog title="Read more on our Blog" />
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
