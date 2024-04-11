import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

export const Controller = (View) => {
  const Result = ({ singleBlogData, ...props }) => {
    const router = useRouter();
    const { locale } = router;
    const routerId = router.query.id;
    const shareImageUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const content = singleBlogData[`content_${locale}`] || singleBlogData.content_en;
    const parseBlogContent = parse(content);
    const metaBLogContent = [];

    for (let i = 0; i < parseBlogContent.length; i++) {
      if (typeof parseBlogContent[i].props?.children !== 'string') {
        metaBLogContent.push(parseBlogContent[i].props.children.props?.children);
      } else {
        metaBLogContent.push(parseBlogContent[i].props?.children);
      }
    }

    const joinedMetaContent = metaBLogContent.join();

    return (
      <View
        {...props}
        routerId={routerId}
        singleBlogData={singleBlogData}
        title={singleBlogData[`title_${locale}`] || singleBlogData.title_en}
        content={joinedMetaContent}
        shareImage={singleBlogData.share_image}
        shareImageUrl={shareImageUrl}
      />
    );
  };

  Result.propTypes = {
    singleBlogData: PropTypes.object,
  };

  return Result;
};
