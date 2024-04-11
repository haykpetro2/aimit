import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SCREENS } from '../../constants/constants';
import { handleServiceScroll, isClient } from '../../config/helpers';
import { serviceList } from '../MainLayout/Constants/constants';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const [menuState, setMenuState] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [activeRoute, setActiveRout] = useState(false);
    const [tabClickCount, setTabClickCount] = useState(0);
    const isTablet = useMediaQuery(SCREENS.isTablet);
    const { pathname } = useRouter();
    const {
      query: { tab },
    } = useRouter();

    useEffect(() => {
      if (tab) handleServiceScroll(tab);
    }, [tab, tabClickCount]);

    useEffect(() => {
      serviceList.forEach(({ routName }) => {
        if (`/${routName}` === pathname) {
          setActiveRout(true);
        }
      });
    }, [pathname]);

    const handleTab = () => {
      setTimeout(() => setTabClickCount((prev) => prev + 1), 200);
      setMenuState('');
    };

    const handleMenu = (e, tab) => {
      e.stopPropagation();
      if (tab === menuState) {
        setMenuState('');
        document.body.style.overflowY = 'auto';
      } else {
        setMenuState(tab);
        document.body.style.overflowY = 'hidden';
      }
      onOpen();
    };

    const onOpen = () => {
      const closeMenu = () => {
        setMenuState('');
        document.body.style.overflowY = 'auto';
      };
      document.addEventListener('click', closeMenu);
    };

    useEffect(() => {
      if (isClient() && !menuState) {
        document.body.style.overflowY = 'auto';
      }
    }, [menuState]);

    const toggleMenu = () => {
      setIsOpen((prev) => !prev);
      document.body.style.overflowY = isOpen ? 'auto' : 'hidden';
    };

    const toggleModal = () => {
      setIsOpenModal((prev) => !prev);
    };

    return (
      <View
        {...props}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        menuState={menuState}
        handleMenu={handleMenu}
        isTablet={isTablet}
        pathname={pathname}
        setMenuState={setMenuState}
        t={t}
        toggleModal={toggleModal}
        isOpenModal={isOpenModal}
        handleTab={handleTab}
        activeRoute={activeRoute}
      />
    );
  };

  return Result;
};
