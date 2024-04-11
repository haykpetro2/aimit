import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export const Controller = (View) => {
  const Result = ({ singleBlogData, singleBlogLatestArticles, ...props }) => {
    const [showAccordion, setShowAccordion] = useState(false);
    const [accordionContentHeight, setAccordionContentHeight] = useState(0);

    const router = useRouter();
    const { locale } = useRouter();

    const routerId = router.query.id;
    const imageUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const showDate = singleBlogData.updated_at?.split('T')[0];

    return (
      <View
        {...props}
        showAccordion={showAccordion}
        setShowAccordion={setShowAccordion}
        accordionContentHeight={accordionContentHeight}
        setAccordionContentHeight={setAccordionContentHeight}
        imageUrl={imageUrl}
        title={singleBlogData[`title_${locale}`] || singleBlogData.title_en}
        authorName={singleBlogData.author_name}
        authorImage={singleBlogData.author_image}
        content={singleBlogData[`content_${locale}`] || singleBlogData.content_en}
        date={showDate}
        singleBlogLatestArticles={singleBlogLatestArticles}
        locale={locale}
        routerId={routerId}
      />
    );
  };
  Result.propTypes = {
    singleBlogData: PropTypes.object,
    singleBlogLatestArticles: PropTypes.array,
  };

  return Result;
};
