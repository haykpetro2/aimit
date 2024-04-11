import React, { useState } from 'react';
import { handleServiceScroll } from '../../../../config/helpers';

export const Controller = (View) => {
  const Result = (props) => {
    const [viewMore, setViewMore] = useState(true);

    const handleShowText = () => {
      if (!viewMore) {
        handleServiceScroll('aimitText');
      }
      setViewMore(!viewMore);
    };

    return <View {...props} viewMore={viewMore} handleShowText={handleShowText} />;
  };

  return Result;
};
