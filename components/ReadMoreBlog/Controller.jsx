import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import PropTypes from 'prop-types';
import { handleServiceScroll } from '../../config/helpers';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ articlesRes, ...props }) => {
    const [isMore, setIsMore] = useState(true);
    const [offset, setOffset] = useState(4);
    const [articlesData, setArticlesData] = useState(articlesRes);
    const [dataCount, setDataCount] = useState(0);
    const limit = 6;

    const { t } = useTranslations();
    const { locale } = useRouter();

    const baseURl = process.env.NEXT_PUBLIC_PublicUrl;

    const getArticlesPost = () => {
      try {
        axios
          .get(`${baseURl}/open-blog?offset=${offset}&limit=${limit}`)
          .then(({ data: { data }, data: { count } }) => {
            setDataCount(count);
            if (offset >= count - 6) {
              setIsMore(false);
            }
            setArticlesData((prev) => {
              return [...prev, ...data];
            });
          });
      } catch (err) {
        console.log('error', err);
      }
    };

    useEffect(() => {
      if (offset !== 4) getArticlesPost();
    }, [locale, offset]);

    const handleMoreLimit = () => {
      setOffset(offset + limit);
    };

    const handleInitialLimit = () => {
      handleServiceScroll('articles');
      setArticlesData([]);
      setIsMore(true);
      setOffset(4);
    };

    return (
      <View
        {...props}
        isMore={isMore}
        handleMoreLimit={handleMoreLimit}
        handleInitialLimit={handleInitialLimit}
        articlesData={articlesData}
        locale={locale}
        dataCount={dataCount}
        t={t}
      />
    );
  };

  Result.propTypes = {
    articlesRes: PropTypes.array,
  };

  return Result;
};
