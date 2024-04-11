import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/navigation';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import PrimaryButton from '../PrimaryButton';
import styles from './style.module.scss';

export const View = ({
  id,
  title = '',
  variants = [],
  t,
  routName,
  image,
  description,
  isMobile,
}) => {
  return (
    <div key={id} className={styles.caseStudiItem}>
      <div className={`col_ ${styles.caseStudiItem_image}`}>
        <Link href={`${routName}`}>
          <a>
            <Tilt
              tiltEnable={!isMobile}
              className="parallax-effect-img"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={800}
              transitionSpeed={1500}
              scale={1.01}
            >
              <Image layout="fill" src={image} alt="Picture of the Blog" />
            </Tilt>
          </a>
        </Link>
      </div>
      <div className={`col_ ${styles.caseStudiItem_info}`}>
        <div className={styles.caseStudiItem_headline}>
          <h3>{title}</h3>
        </div>
        <div className={styles.caseStudiItem_variants}>
          {variants.map((item, i) => {
            return (
              <div key={i} className={styles.caseStudiItem_varians}>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.caseStudiItem_description}>
          <p>{t(description)}</p>
        </div>
        <div className={styles.caseStudiItem_button}>
          <PrimaryButton isLink href={routName} text={t('continueStudy')} />
        </div>
      </div>
    </div>
  );
};

View.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  variants: PropTypes.array,
  routName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  isMobile: PropTypes.bool,
  t: PropTypes.func,
};
