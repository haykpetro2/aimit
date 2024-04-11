import React from 'react';
import WebSities from '../../../../svgs/WebSites';
import Crm from '../../../../svgs/CRM';
import Eccomerce from '../../../../svgs/EccoMerce';
import styles from './style.module.scss';

export const View = () => {
  return (
    <section className={styles['solution-section']}>
      <div className="container">
        <div className="section-heading">
          <h1>Web solutions Aimit creates</h1>
        </div>
        <div className={styles['solution-section-mainpanel']}>
          <div id="1" className={`col_ ${styles['solution-item-overlay']}`}>
            <div className={styles['solution-item']}>
              <div className={styles['solution-item-name']}>
                <h3>Websites</h3>
              </div>
              <div className={styles['solution-item-description']}>
                <p>
                  Websites - Website (also written as a Web site) is a collection of Web pages and
                  related content that is identified by a common domain name and published on at
                  least one Web Server. Examples of notable websites are Google, Facebook, Amazon,
                  and Wikipedia. All publicly accessible websites collectively constitute the World
                  Wide Web. There are also private websites that can only be accessed on a private
                  network, such as a company՛s internal website for its employees. Websites are
                  typically dedicated to a particular topic or purpose, such as news, education,
                  commerce, entertainment, or social networking.
                </p>
              </div>
              <div className={styles['solution-item-icon']}>
                <WebSities />
              </div>
            </div>
          </div>
          <div id="4" className={`col_ ${styles['solution-item-overlay']}`}>
            <div className={styles['solution-item']}>
              <div className={styles['solution-item-name']}>
                <h3>Web Portals</h3>
              </div>
              <div className={styles['solution-item-description']}>
                <p>
                  Web Portals - A web portal is a specially designed website that brings information
                  from diverse sources, like emails, online forums, and search engines, together in
                  a uniform way. Usually, each information source gets its dedicated area on the
                  page for displaying information (a portlet); often, the user can configure which
                  ones to display. Variants of portals include mashups and intranet “dashboards” for
                  executives and managers. The extent to which content is displayed in a “uniform
                  way” may depend on the intended user and the intended purpose, as well as the
                  diversity of the content. A portal may use a search engine՛s application
                  programming interface (API) to permit users to search intranet content as opposed
                  to extranet content by restricting which domains may be searched.
                </p>
              </div>
              <div className={styles['solution-item-icon']}>
                <Crm />
              </div>
            </div>
          </div>
          <div id="3" className={`col_ ${styles['solution-item-overlay']}`}>
            <div className={styles['solution-item']}>
              <div className={styles['solution-item-name']}>
                <h3>eCommerce</h3>
              </div>
              <div className={styles['solution-item-description']}>
                <p>
                  E-commerce - (electronic commerce) is the activity of electronically buying or
                  selling products on online services or over the Internet. E-commerce draws on
                  technologies such as mobile commerce, electronic funds transfer, supply chain
                  management, Internet marketing, online transaction processing, electronic data
                  interchange(EDI), inventory management systems, and automated data collection
                  systems. E-commerce is in turn driven by the technological advances of the
                  semiconductor industry and is the largest sector of the electronics industry.
                </p>
              </div>
              <div className={styles['solution-item-icon']}>
                <Eccomerce />
              </div>
            </div>
          </div>
          <div id="2" className={`col_ ${styles['solution-item-overlay']}`}>
            <div className={styles['solution-item']}>
              <div className={styles['solution-item-name']}>
                <h3>Enterprise web solutions</h3>
              </div>
              <div className={styles['solution-item-description']}>
                <p>
                  We’re proud to have a team of best Product and UX Designers. Their skills and
                  abilities range from the research and design of complex web and mobile
                  experiences, through to illustration, motion design, and brand design.
                </p>
              </div>
              <div className={styles['solution-item-icon']}>
                <WebSities />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
