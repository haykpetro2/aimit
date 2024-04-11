import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useTranslations } from '../../../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = ({ limit }) => {
    const [feeds, setFeedsData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [activeImageId, setActiveImageId] = useState(0);
    const { t } = useTranslations();

    const token = process.env.NEXT_PUBLIC_INS_TOKEN;
    const instagramUrl = process.env.NEXT_PUBLIC_InstagramUrl;

    const toggleModal = (id) => {
      if (id !== undefined) {
        setActiveImageId(id);
      }
      setIsOpen((prev) => !prev);
    };

    const fetchInstagramPost = (offset) => {
      try {
        axios
          .get(
            `${instagramUrl}/me/media?fields=id,media_type,thumbnail_url,media_url,caption&offset=${offset}&limit=${limit}&access_token=${token}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log('error', err);
      }
    };

    useEffect(() => {
      fetchInstagramPost(0);
    }, [limit]);

    const handleChangeOffset = (activeIndex) => {
      if (activeIndex >= limit - 20) {
        fetchInstagramPost(activeIndex - 20);
      }
    };

    Result.propTypes = {
      limit: PropTypes.number,
    };

    return (
      <View
        t={t}
        feeds={feeds}
        isOpen={isOpen}
        toggleModal={toggleModal}
        activeImageId={activeImageId}
        handleChangeOffset={handleChangeOffset}
      />
    );
  };

  return Result;
};
