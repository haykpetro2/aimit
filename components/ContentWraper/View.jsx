import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LogoWhite from '../../svgs/LogoWhite';
import LogoSvg from '../../svgs/Logo';
import Phone from '../../svgs/Phone';
import { childShowLength, routList, serviceList } from '../MainLayout/Constants/constants';
import ArrowRight from '../../svgs/ArrowRight';
import Arrow from '../../svgs/Arrow';
import Circle from '../Circle';
import MobileView from './Components/MobileView';
import FormModal from '../GetInTouch/Components/FormModal';
import styles from './style.module.scss';
import ArrowForward from '../../svgs/ArrowForward';
import MenuCircle from '../../svgs/MenuCircle';

export const View = ({
  isOpen = false,
  toggleMenu = () => {},
  menuState,
  handleMenu,
  isTablet,
  pathname,
  placement,
  t,
  toggleModal,
  isOpenModal,
  handleTab,
  activeRoute,
}) => {
  const openMenu = isOpen ? styles.openMenu : '';
  return (
    <div className="container">
      <div className={`${styles.header_mainpanel} ${openMenu}`}>
        <div className={styles.brand}>
          <Link href="/">
            <a>{pathname === '/design' ? <LogoWhite /> : <LogoSvg />}</a>
          </Link>
        </div>
        <div
          className={`${styles.user_actions} ${
            menuState === 'menuIndustries' || menuState === 'menuService' ? styles.mobile : ''
          }`}
        >
          {menuState !== 'menuIndustries' && menuState !== 'menuService' ? (
            <>
              <nav className={styles.app_navigation}>
                <ul className={styles.app_navigationList}>
                  <li className={`${styles.hasChild}`}>
                    <span
                      className={activeRoute ? styles.active : ''}
                      onClick={(e) => handleMenu(e, 'menuService')}
                    >
                      {t('services')}
                      <span className={`${placement ? styles.footerArrow : ''}`}>
                        <Arrow />
                      </span>
                    </span>
                    {menuState === 'menuService' && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <ul className={styles['sub-menu']}>
                          <div className={styles['left-side']}>
                            <div className={styles['left-side-headline']}>
                              <h4>{/* <Trans t={t}>{t('startYour')}</Trans> */}</h4>
                            </div>
                            <div className={styles['booking-call']}>
                              <button type="button" onClick={toggleModal}>
                                <Phone />
                                {t('getInTouch')}
                              </button>
                            </div>
                          </div>
                          <div className={styles['right-side']}>
                            {serviceList.map(({ id, title, Icon, child }) => (
                              <ul key={id} className="col_">
                                <li>
                                  <Link href="#">
                                    <a>
                                      <span className={styles['link-icon']}>
                                        <Icon />
                                      </span>
                                      {t(title)}
                                      <span className={styles['arrow-icon']}>
                                        <ArrowRight />
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                {child.map((item, index) => (
                                  <li key={index}>
                                    <Link href="/">
                                      <a>{t(item)}</a>
                                    </Link>
                                  </li>
                                ))}
                                {child.length >= childShowLength && (
                                  <li className={styles['view-more']}>
                                    <Link href="/">
                                      <a>{t('viewMore')}</a>
                                    </Link>
                                  </li>
                                )}
                              </ul>
                            ))}
                          </div>
                        </ul>
                      </div>
                    )}
                  </li>
                  {/* todo */}
                  {/* <li className={styles.hasChild}> */}
                  {/*  <Link href="/"> */}
                  {/*    <span onClick={(e) => handleMenu(e, 'menuIndustries')}> */}
                  {/*      {t('industries')} */}
                  {/*      <span> */}
                  {/*        <Arrow /> */}
                  {/*      </span> */}
                  {/*    </span> */}
                  {/*  </Link> */}
                  {/*  {menuState === 'menuIndustries' && ( */}
                  {/*    <div onClick={(e) => e.stopPropagation()}> */}
                  {/*      <ul className={styles['sub-menu']}> */}
                  {/*        <div className={styles['left-side']}> */}
                  {/*          <div className={styles['left-side-headline']}> */}
                  {/*            <h4> */}
                  {/*              <Trans t={t}>{t('startYour')}</Trans> */}
                  {/*            </h4> */}
                  {/*          </div> */}
                  {/*          <div className={styles['booking-call']}> */}
                  {/*            <a href="#"> */}
                  {/*              <Phone /> {t('BookingCall')} */}
                  {/*            </a> */}
                  {/*          </div> */}
                  {/*        </div> */}
                  {/*        <div className={styles['right-side']}> */}
                  {/*          {serviceList.map(({ id, title, Icon, child }) => ( */}
                  {/*            <ul key={id} className="col_"> */}
                  {/*              <li> */}
                  {/*                <Link href="#"> */}
                  {/*                  <a> */}
                  {/*                    <span className={styles['link-icon']}> */}
                  {/*                      <Icon /> */}
                  {/*                    </span> */}
                  {/*                    {t(title)} */}
                  {/*                    <span className={styles['arrow-icon']}> */}
                  {/*                      <ArrowRight /> */}
                  {/*                    </span> */}
                  {/*                  </a> */}
                  {/*                </Link> */}
                  {/*              </li> */}
                  {/*              {child.map((item) => ( */}
                  {/*                <li> */}
                  {/*                  <Link href="/"> */}
                  {/*                    <a>{t(item)}</a> */}
                  {/*                  </Link> */}
                  {/*                </li> */}
                  {/*              ))} */}
                  {/*              {child.length >= childShowLength && ( */}
                  {/*                <li className={styles['view-more']}> */}
                  {/*                  <Link href="/"> */}
                  {/*                    <a>{t('viewMore')}</a> */}
                  {/*                  </Link> */}
                  {/*                </li> */}
                  {/*              )} */}
                  {/*            </ul> */}
                  {/*          ))} */}
                  {/*        </div> */}
                  {/*      </ul> */}
                  {/*    </div> */}
                  {/*  )} */}
                  {/* </li> */}
                  {routList.map(({ id, href, title }) => (
                    <li role="presentation" key={id} onClick={isTablet ? toggleMenu : () => {}}>
                      <Link href={title === 'Team' ? `${href}?tab=team` : `${href}`}>
                        <a className={pathname.includes(href) ? styles.active : ''}>{t(title)}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={styles.circle_overlay}>
                <Circle />
              </div>
              {/* todo */}
              {/* <div className={styles.lang_switcher_overlay}> */}
              {/*  <Language placement={placement} /> */}
              {/* </div> */}
            </>
          ) : (
            <>
              <nav className={styles.app_navigation}>
                <ul className={styles.app_navigationList}>
                  <li className={styles.hasChild}>
                    <span
                      className={activeRoute ? styles.active : ''}
                      onClick={(e) => handleMenu(e, 'menuService')}
                    >
                      {t('services')}
                      <span className={placement ? styles.footerArrow : ' '}>
                        <Arrow />
                      </span>
                    </span>
                    {menuState === 'menuService' && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <ul
                          className={
                            placement
                              ? `${styles['sub-menu']} ${styles.footer}`
                              : styles['sub-menu']
                          }
                        >
                          <div className={styles['sub-menu-main']}>
                            {serviceList.map(({ id, title, child, routName }, index) => (
                              <div className={styles['menu-listing']} key={index}>
                                <ul key={id} className="col_">
                                  <li role="presentation">
                                    <Link href={`/${routName}`}>
                                      <a>{t(title)}</a>
                                    </Link>
                                  </li>
                                  {child.map((item, index) => (
                                    <li role="presentation" key={item} onClick={handleTab}>
                                      <Link scroll={false} href={`/${routName}?tab=${index + 1}`}>
                                        <a>{t(item)}</a>
                                      </Link>
                                    </li>
                                  ))}
                                  <li className={styles['view-more']}>
                                    <Link href={routName}>
                                      <a>
                                        <ArrowForward />
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            ))}
                            <div className={styles['menu-listing']}>
                              <ul>
                                <div className={styles['menu-effect']}>
                                  <MenuCircle />
                                  <div className={styles.top} />
                                  <div className={styles.bottom} />
                                  <div className={styles.left} />
                                  <div className={styles.right} />
                                </div>
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </div>
                    )}
                  </li>
                  {/* todo */}
                  {/* <li className={styles.hasChild}> */}
                  {/*  <Link href="/"> */}
                  {/*    <span onClick={(e) => handleMenu(e, 'menuIndustries')}> */}
                  {/*      {t('industries')} */}
                  {/*      <span> */}
                  {/*        <Arrow /> */}
                  {/*      </span> */}
                  {/*    </span> */}
                  {/*  </Link> */}
                  {/*  {menuState === 'menuIndustries' && ( */}
                  {/*    <div onClick={(e) => e.stopPropagation()}> */}
                  {/*      <ul className={styles['sub-menu']}> */}
                  {/*        <div className={styles['left-side']}> */}
                  {/*          <div className={styles['left-side-headline']}> */}
                  {/*            <h4> */}
                  {/*              <Trans t={t}>{t('startYour')}</Trans> */}
                  {/*            </h4> */}
                  {/*          </div> */}
                  {/*          <div className={styles['booking-call']}> */}
                  {/*            <a href="#"> */}
                  {/*              <Phone /> {t('BookingCall')} */}
                  {/*            </a> */}
                  {/*          </div> */}
                  {/*        </div> */}
                  {/*        <div className={styles['right-side']}> */}
                  {/*          {serviceList.map(({ id, title, Icon, child }) => ( */}
                  {/*            <ul key={id} className="col_"> */}
                  {/*              <li> */}
                  {/*                <Link href="#"> */}
                  {/*                  <a> */}
                  {/*                    <span className={styles['link-icon']}> */}
                  {/*                      <Icon /> */}
                  {/*                    </span> */}
                  {/*                    {t(title)} */}
                  {/*                    <span className={styles['arrow-icon']}> */}
                  {/*                      <ArrowRight /> */}
                  {/*                    </span> */}
                  {/*                  </a> */}
                  {/*                </Link> */}
                  {/*              </li> */}
                  {/*              {child.map((item) => ( */}
                  {/*                <li> */}
                  {/*                  <Link href="/"> */}
                  {/*                    <a>{t(item)}</a> */}
                  {/*                  </Link> */}
                  {/*                </li> */}
                  {/*              ))} */}
                  {/*              {child.length >= childShowLength && ( */}
                  {/*                <li className={styles['view-more']}> */}
                  {/*                  <Link href="/"> */}
                  {/*                    <a>{t('viewMore')}</a> */}
                  {/*                  </Link> */}
                  {/*                </li> */}
                  {/*              )} */}
                  {/*            </ul> */}
                  {/*          ))} */}
                  {/*        </div> */}
                  {/*      </ul> */}
                  {/*    </div> */}
                  {/*  )} */}
                  {/* </li> */}
                  {routList.map(({ id, href, title }) => (
                    <li role="presentation" key={id} onClick={isTablet ? toggleMenu : () => {}}>
                      <Link href={href}>
                        <a>{t(title)}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={styles.circle_overlay}>
                <Circle />
              </div>
              {/* todo */}
              {/* <div className={styles.lang_switcher_overlay}> */}
              {/*  <Language placement={placement} /> */}
              {/* </div> */}
            </>
          )}
          {isTablet && <MobileView toggleMenu={toggleMenu} />}
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div />
        </div>
      </div>
      <FormModal isOpen={isOpenModal} toggleModal={toggleModal} />
    </div>
  );
};

View.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  menuState: PropTypes.string,
  handleMenu: PropTypes.func,
  isTablet: PropTypes.bool,
  t: PropTypes.func,
  pathname: PropTypes.string,
  placement: PropTypes.string,
  toggleModal: PropTypes.func,
  handleTab: PropTypes.func,
  isOpenModal: PropTypes.bool,
  activeRoute: PropTypes.bool,
};
