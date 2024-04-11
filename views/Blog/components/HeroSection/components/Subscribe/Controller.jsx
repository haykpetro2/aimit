import React, { useState } from 'react';
import axios from 'axios';
import { useTranslations } from '../../../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const { t } = useTranslations();
    const baseURl = process.env.NEXT_PUBLIC_PublicUrl;
    const [isSuccess, setIsSuccess] = useState(false);
    const onSubmit = (values) => {
      try {
        axios
          .post(`${baseURl}/subscribe?email=${values.email}`, values.email)
          .then((res) => setIsSuccess(res.data.success));
      } catch (err) {
        console.log('error', err);
      }
    };

    return <View {...props} onSubmit={onSubmit} t={t} isSuccess={isSuccess} />;
  };

  return Result;
};
