import React from 'react';
import PropTypes from 'prop-types';
import PopupSlider from './PopupSlider';
import styles from './style.module.scss';

export const View = ({
  videoList,
  // sliceVideoList,
  // handleMoreVideoLimit,
  // isMore,
  // handleInitialVideoLimit,
  isOpen,
  toggleModal,
  activeImageId,
  // t,
}) => {
  return (
    <section id="blogVideo" className={styles['video-section']}>
      <div className="container">
        {/* todo */}
        {/* <div className="section-heading"> */}
        {/*  <h2>{t('video')}</h2> */}
        {/* </div> */}
        {/* <div className={styles['video-section_mainpanel']}> */}
        {/* <div className={styles.videoItems}> */}
        {/*  {sliceVideoList.map( */}
        {/*    ({ */}
        {/*      id, */}
        {/*      video: { */}
        {/*        VideoCover: { src }, */}
        {/*      }, */}
        {/*      title, */}
        {/*    }) => { */}
        {/*      return ( */}
        {/*        <div */}
        {/*          onClick={() => toggleModal(id)} */}
        {/*          key={id} */}
        {/*          className={`col_ ${styles['video-item']}`} */}
        {/*        > */}
        {/*          <div className={styles['video-overlay']}> */}
        {/*            <div className={styles['video-thumbnail']}> */}
        {/*              <Image layout="fill" src={src} /> */}
        {/*            </div> */}
        {/*            <div className={`play-icon ${styles['video-play']}`} /> */}
        {/*          </div> */}
        {/*          <div className={styles['video-description']}> */}
        {/*            <p>{title}</p> */}
        {/*          </div> */}
        {/*        </div> */}
        {/*      ); */}
        {/*    } */}
        {/*  )} */}
        {/* </div> */}
        {/* <div className={styles['view-more']}> */}
        {/*  {isMore ? ( */}
        {/*    <button type="button" onClick={handleMoreVideoLimit}> */}
        {/*      {t('loadMore')} */}
        {/*    </button> */}
        {/*  ) : ( */}
        {/*    <button type="button" onClick={handleInitialVideoLimit}> */}
        {/*      {t('back')} */}
        {/*    </button> */}
        {/*  )} */}
        {/* </div> */}
        {/* </div> */}
      </div>
      {isOpen && (
        <PopupSlider
          isOpen={isOpen}
          toggleModal={toggleModal}
          activeImageId={activeImageId}
          videoList={videoList}
        />
      )}
    </section>
  );
};

View.propTypes = {
  videoList: PropTypes.array,
  sliceVideoList: PropTypes.array,
  handleInitialVideoLimit: PropTypes.func,
  handleMoreVideoLimit: PropTypes.func,
  isMore: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  activeImageId: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  t: PropTypes.func,
};
