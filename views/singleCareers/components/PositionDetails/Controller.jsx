import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export const Controller = (View) => {
  const Result = ({ careersSingleData, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showAccordion, setShowAccordion] = useState(false);
    const [accordionContentHeight, setAccordionContentHeight] = useState(0);

    const router = useRouter();
    const { locale } = router;
    const routerId = router.query.id;

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    return (
      <View
        {...props}
        toggleModal={toggleModal}
        isOpen={isOpen}
        title={careersSingleData[`title_${locale}`] || careersSingleData.title_en}
        content={careersSingleData[`content_${locale}`] || careersSingleData.content_en}
        showAccordion={showAccordion}
        setShowAccordion={setShowAccordion}
        accordionContentHeight={accordionContentHeight}
        setAccordionContentHeight={setAccordionContentHeight}
        routerId={routerId}
      />
    );
  };
  Result.propTypes = {
    careersSingleData: PropTypes.object,
  };

  return Result;
};
