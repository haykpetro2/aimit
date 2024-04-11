import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SCREENS } from '../../constants/constants';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const { tabsList } = props;
    const [toggleState, setToggleState] = useState(1);
    const [accordionItems, setAccordionItems] = useState(tabsList);
    const [descriptionHeight, setDescriptionHeight] = useState(0);

    const isTablet = useMediaQuery(SCREENS.isTablet);
    const router = useRouter();
    const {
      query: { tab },
    } = useRouter();

    useEffect(() => {
      if (tab) {
        setToggleState(+tab);
      }
    }, [tab]);

    const toggleTab = (index) => {
      router.query.tab = index;
      router.push(router, undefined, { scroll: false });
    };

    const toggleAccordion = (e, id) => {
      const {
        target: {
          lastChild: {
            firstChild: { offsetHeight },
          },
        },
      } = e;
      setDescriptionHeight(offsetHeight);
      const current = accordionItems.filter((item) => {
        return item.id === id;
      });

      setAccordionItems((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, isOpen: !item.isOpen };
          }
          return { ...item, isOpen: false };
        });
      });

      e.stopPropagation();
      const {
        target: {
          lastElementChild: { clientHeight },
        },
      } = e;
      if (!current[0].isOpen) {
        e.target.style.paddingBottom = `${clientHeight}px`;
      } else {
        e.target.style.paddingBottom = `${0}px`;
      }
    };

    return (
      <View
        {...props}
        t={t}
        toggleState={toggleState}
        toggleTab={toggleTab}
        toggleAccordion={toggleAccordion}
        descriptionHeight={descriptionHeight}
        accordionItems={accordionItems}
        isTablet={isTablet}
        tab={tab}
      />
    );
  };
  Result.propTypes = {
    tabsList: PropTypes.array,
  };

  return Result;
};
