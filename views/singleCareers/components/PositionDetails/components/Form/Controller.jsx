import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useTranslations } from '../../../../../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const [uploadedFile, setUpLoadedFile] = useState('');
    const [fileError, setFileError] = useState('');
    const { t } = useTranslations();
    const router = useRouter();
    const { id } = router.query;

    const baseURl = process.env.NEXT_PUBLIC_PublicUrl;

    const handleFile = (e, setFieldValue) => {
      setFieldValue('cv', e.target.files[0]);
      setUpLoadedFile(e.target.files[0].name);
    };

    const onSubmit = async (values) => {
      const formData = new FormData();
      formData.append('vacancy_id', id);
      Object.keys(values).map((item) => {
        formData.append(item, values[item]);
      });
      try {
        setFileError('');
        await axios.post(`${baseURl}/cv`, formData);
        router.push('/thank-you');
      } catch (err) {
        setFileError('something was wrong');
      }
    };
    return (
      <View
        {...props}
        t={t}
        onSubmit={onSubmit}
        uploadedFile={uploadedFile}
        handleFile={handleFile}
        fileError={fileError}
      />
    );
  };

  return Result;
};
