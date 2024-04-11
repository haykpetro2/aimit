import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';

export const Controller = (View) => {
  const Result = ({ careersSingleData, ...props }) => {
    const router = useRouter();
    const { locale } = router;
    const content = careersSingleData[`content_${locale}`] || careersSingleData.content_en;
    const parseCareersContent = parse(content);
    const metaCareersContent = [];

    for (let i = 0; i < parseCareersContent.length; i++) {
      if (typeof parseCareersContent[i].props?.children !== 'string') {
        metaCareersContent.push(parseCareersContent[i].props.children.props?.children);
      } else {
        metaCareersContent.push(parseCareersContent[i].props?.children);
      }
    }

    const joinedMetaContent = metaCareersContent.join();

    return (
      <View
        {...props}
        careersSingleData={careersSingleData}
        title={careersSingleData[`title_${locale}`] || careersSingleData.title_en}
        content={joinedMetaContent}
      />
    );
  };

  Result.propTypes = {
    careersSingleData: PropTypes.object,
  };

  return Result;
};
