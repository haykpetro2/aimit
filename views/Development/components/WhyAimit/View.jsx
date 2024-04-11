import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../../../svgs/Arrow';
import Experience from '../../../../svgs/Experience';
import Project from '../../../../svgs/Project';
import Staff from '../../../../svgs/Staff';
import styles from './style.module.scss';

export const View = ({ viewMore, handleShowText }) => {
  return (
    <section id="aimitText" className={styles['more-section']}>
      <div className="container">
        <div className={styles['more-section-mainpanel']}>
          <div className={styles['section-big-headline']}>
            <h2>Why Aimit</h2>
          </div>
          <div className={styles['more-mainpanel']}>
            <div className={styles['more-text']}>
              <div className={styles['our-experience']}>
                <div className={styles.item}>
                  <div className={styles['item-icon']}>
                    <Experience />
                  </div>
                  <div className={styles['item-name']}>
                    <h3>7+ year experience</h3>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles['item-icon']}>
                    <Project />
                  </div>
                  <div className={styles['item-name']}>
                    <h3>100+ project</h3>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles['item-icon']}>
                    <Staff />
                  </div>
                  <div className={styles['item-name']}>
                    <h3>45+ staff</h3>
                  </div>
                </div>
              </div>
              <div
                className={
                  viewMore
                    ? styles['experinace-text']
                    : `${styles['experinace-text']} ${styles.show}`
                }
              >
                <p>
                  AimIt is among the best web development companies in Armenia creating responsive
                  web applications & websites tailoring and responding to your business needs.
                  Delivering web development services, we are experienced at navigating the
                  development lifecycle: quality, relevant go-to-market time, and optimized
                  resources. Our web development portfolio comprises web application development,
                  full-stack web development, front-end development, CMS development, custom web
                  development, and e-commerce development. Web app development is a service we have
                  been providing for over 15 years now, so we’ve got a full portfolio of both
                  short-term & long-term projects in the format of dedicated development teams or
                  outsourcing services. Web application development project scope always includes
                  technology consulting, UI/UX design, and infrastructure management. Our full-stack
                  web development team possesses deep technology expertise & has completed over 70
                  projects using PHP programming, JavaScript, Typescript, Node JS, Express JS, React
                  JS, Next JS, and many more mesmerizing techniques. Our full-stack web development
                  engineers consistently exceed customers’ expectations and provide a smooth and
                  finesse development process. Front-end development is another niche of our web
                  development services. We create solutions with responsive UI/UX design, mature
                  functionality & high security. CMS development is a crucial step for website
                  search engine optimization & a useful tool for content management. Custom web
                  development is a service our customers appreciate the most. We always take a
                  personal approach to bespoken software development. With extensive experience in
                  e-commerce development, we create ready-for-use solutions for large retailers &
                  smaller businesses, budgets, and timescales tailored to the needs of the client.
                  As a web development company, AimIt delivers the most effective and productive web
                  development software, cost-effective development processes, timely solutions
                  deployment, and post-delivery support. As a highly experience web development
                  company, we apply the latest trending methodologies & tools to create secure &
                  reliable products.
                </p>
                <div className={styles['more-actions']} onClick={handleShowText}>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  viewMore: PropTypes.bool,
  handleShowText: PropTypes.func,
};
