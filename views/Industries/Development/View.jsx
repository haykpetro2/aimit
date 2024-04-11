import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import Expertise from './components/Expertise';
import CaseStudies from './components/CaseStudies';
import More from '../../../components/More';
import Contact from '../../../components/Contact';

export const View = () => {
  return (
    <>
      <Head>
        <title>Aimit Company</title>
      </Head>
      <HeroSection />
      <Expertise />
      <CaseStudies />
      <More
        headline="More About eCommerce"
        description="Magnise is among the best web development companies in Armenia creating responsive web applications & websites responding to your business needs. Delivering web development services, we are experienced at navigating the development lifecycle: quality, relevant go-to-market time, and optimized resources.

Our web development portfolio comprises: web application development, full stack web development, front-end development, CMS development, custom web development, e-commerce development. Web app development is a service we have been providing for over 15 years now, so we’ve got a full portfolio of both short-term & long-term projects in the format of dedicated development teams, or outsourcing services. Web application development project scope always includes technology consulting, UI/UX design, and infrastructure management.

Our full stack web development team possesses deep technology expertise & has completed over 100 projects using iOS & Android development, PHP programming, JavaScript, .Net, Angular, Swift, Kotlin, React JS, and many more.

Our full-stack web development engineers consistently exceed customers’ expectations, and provide a smooth development process.

Front-end development is another niche of our web development services. We create solutions with responsive UI/UX design, mature functionality & high security. CMS development is a crucial step for website search optimization & a useful tool for content management.

Custom web development is a service our customers appreciate the most. We always take a personal approach for bespoke software development. With extensive experience in e-commerce development, we create ready-for-use solutions for large retailers & smaller businesses, budgets and timescales tailored to the needs of the client.

As a web development company, Magnise delivers the most effective web development software, cost-effective development processes, timely solutions deployment, and post-delivery support. As a highly experience web development agency, we apply the latest methodologies & tools to create secure & reliable solutions."
      />
      <Contact title="Contacts" />
    </>
  );
};
