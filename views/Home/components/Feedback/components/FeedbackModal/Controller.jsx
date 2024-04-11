import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FeedbackList } from '../../Constants/constants';
import { useTranslations } from '../../../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { activeImageId, textRef, setViewMore } = props;
    const { t } = useTranslations();

    const feedbackItem = FeedbackList.find(({ id }) => id === activeImageId);
    const { director, directorName, description, image } = feedbackItem;
    const offsetHeight = textRef.current?.offsetHeight;
    const scrollHeight = textRef.current?.scrollHeight;
    const lineHeight = scrollHeight > offsetHeight;

    useEffect(() => {
      if (textRef.current?.scrollHeight > textRef.current?.offsetHeight) setViewMore(true);
    }, [textRef.current]);

    return (
      <View
        {...props}
        t={t}
        description={description}
        director={director}
        directorName={directorName}
        image={image}
        offsetHeight={offsetHeight}
        scrollHeight={scrollHeight}
        lineHeight={lineHeight}
      />
    );
  };

  Result.propTypes = {
    activeImageId: PropTypes.number,
    textRef: PropTypes.object,
    setViewMore: PropTypes.func,
  };

  return Result;
};
