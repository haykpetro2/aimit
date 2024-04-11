import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import CaseStudies from '../../../../components/CaseStudies';
import styles from './style.module.scss';
import { useTranslations } from '../../../../contexts/translation.context';

export const View = ({
  spliceCaseStudiesList,
  isMore,
  handleMoreCaseStudiesLimit,
  handleInitialCaseStudiesLimit,
}) => {
  const { t } = useTranslations();
  return (
    <section id="caseStudies" className={styles['caseStudies-section']}>
      <div className="container">
        <div className="section-heading">
          <h2>{t('caseStudies')}</h2>
        </div>
        <div className={styles.descriptionOverlay}>
          <div className="description">
            <p>{/* <Trans t={t}>{t('caseStudiesText')}</Trans> */}</p>
          </div>
        </div>

        <div className={styles['caseStudies-section_mainpanel']}>
          <div className={styles.caseStudiItems}>
            {spliceCaseStudiesList.map(({ id, title, description, variants, routName, image }) => {
              return (
                <div key={id} className={styles['item-overlay']}>
                  <CaseStudies
                    title={title}
                    variants={variants}
                    description={description}
                    routName={routName}
                    image={image}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles['more-actions']}>
            {isMore ? (
              <button type="button" onClick={handleMoreCaseStudiesLimit}>
                {t('loadMore')}
              </button>
            ) : (
              <button type="button" onClick={handleInitialCaseStudiesLimit}>
                {t('back')}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  spliceCaseStudiesList: PropTypes.array,
  isMore: PropTypes.bool,
  handleMoreCaseStudiesLimit: PropTypes.func,
  handleInitialCaseStudiesLimit: PropTypes.func,
  t: PropTypes.func,
};
