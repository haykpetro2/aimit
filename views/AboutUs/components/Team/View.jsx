import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

export const View = ({ isMore, sliceTeamList, handleMoreTeamLimit, handleInitialTeamLimit, t }) => {
  return (
    <section id="team" className={styles['team-section']}>
      <div className="container">
        <div className="section-heading">
          <h1>{t('ourTeam')}</h1>
        </div>
        <div className={styles['team-section-mainpanel']}>
          <div className={styles['team-members']}>
            {sliceTeamList?.map(({ id, teamMember, name, profession }) => {
              return (
                <div className="col_" key={id}>
                  <div key={id} className={` ${styles['team-member']}`}>
                    <div className={styles['team-member-image']}>
                      <Image layout="fill" src={teamMember} alt="Ceo Founder" property="true" />
                    </div>
                    <div className={styles['team-member-infos']}>
                      <div className={styles['team-member-name']}>
                        <h3>{name}</h3>
                      </div>
                      <div className={styles['team-member-position']}>
                        <p>{profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles['view-more']}>
            {isMore ? (
              <button type="button" onClick={handleMoreTeamLimit}>
                load more
              </button>
            ) : (
              <button type="button" onClick={handleInitialTeamLimit}>
                back
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

View.propTypes = {
  isMore: PropTypes.bool,
  sliceTeamList: PropTypes.array,
  handleMoreTeamLimit: PropTypes.func,
  handleInitialTeamLimit: PropTypes.func,
  t: PropTypes.func,
};
