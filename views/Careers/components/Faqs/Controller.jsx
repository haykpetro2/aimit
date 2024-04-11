import React, { useState } from 'react';
import { ACCORDION_ITEMS } from '../../../../data';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const [accordionItems, setAccordionItems] = useState(ACCORDION_ITEMS);
    const [descriptionHeight, setDescriptionHeight] = useState(0);

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
        accordionItems={accordionItems}
        toggleAccordion={toggleAccordion}
        descriptionHeight={descriptionHeight}
        t={t}
      />
    );
  };

  return Result;
};
