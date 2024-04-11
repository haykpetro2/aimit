import React from 'react';
import Head from 'next/head';
import HeroSection from '../../components/SerivecesHeroSection';
import Solutions from './components/Solutions';
import ContactForFree from '../../components/ContactForFree';
import Icon from '../../svgs/Development';
import Technologies from '../../components/Technologies';
import WhyAimit from './components/WhyAimit';
import Focus from './components/Focus';
import Culture from '../../components/Culture';
import ReadMoreBlog from '../../components/ServicesBlogSlider';
import FeedBack from '../Home/components/Feedback';
import CaseStudies from '../Home/components/CaseStudies';

import styles from './style.module.scss';

export const View = () => {
  const titleText = 'Aimit Company | Development';
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="description" content="Aimit Company | Development" />
      </Head>
      <HeroSection
        title="Development"
        description="We keep pace with the latest technologies, trends, and solutions to deliver the best possible results."
        icon={Icon()}
      />
      <Solutions />
      <Technologies />
      <WhyAimit />
      <Focus />
      <CaseStudies title="Recent Projects We Made" />
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
