import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslations } from '../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ data, routerId, ...props }) => {
    const [latestArticlesData, setLatestArticlesData] = useState([]);
    const { t } = useTranslations();
    const { locale } = useRouter();

    const getLatestArticlesPost = () => {
      if (routerId) {
        const filteredLatestArticlesData = data?.filter((item) => item.id !== +routerId);
        const newLatestArticlesData = filteredLatestArticlesData?.slice(0, 2);
        setLatestArticlesData(newLatestArticlesData);
      } else {
        setLatestArticlesData(data);
      }
    };

    useEffect(() => {
      getLatestArticlesPost();
    }, [locale, routerId]);

    return <View {...props} latestArticlesData={latestArticlesData} t={t} locale={locale} />;
  };
  Result.propTypes = {
    routerId: PropTypes.string,
    data: PropTypes.array,
  };

  return Result;
};
