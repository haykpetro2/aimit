import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useTranslations } from '../../contexts/translation.context';

export const Controller = (View) => {
  const Result = (props) => {
    const [showValue, setShowValue] = useState(0);
    const [fileItem, setFileItem] = useState([]);
    const [textAreaHeight, setTextAreaHeight] = useState(42);
    const [fileError, setFileError] = useState('');
    const [files, setFiles] = useState([]);
    const { t } = useTranslations();
    const router = useRouter();
    const textAreaHref = useRef(null);

    const baseURl = process.env.NEXT_PUBLIC_PublicUrl;

    const handleFiles = async (e, setFieldValue, values) => {
      const formData = new FormData();
      const fileList = [...files];
      if (e.target.files.length > 5 || fileList.length > 5) {
        setFileError('Maximum 6 files');
        return;
      }
      Object.values(e.target.files).forEach((file) => {
        file.id = Math.random();
        fileList.push(file);
        formData.append('files[]', file);
      });
      setFiles(fileList);
      try {
        setFileError('');
        const {
          data: { data },
        } = await axios.post(`${baseURl}/upload-file`, formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        });
        setFileItem(fileList);
        setFieldValue('files', [...values.files, ...data]);
      } catch (err) {
        setFileError('something was wrong');
      }

      e.target.value = '';
    };

    const onSubmit = async (values) => {
      try {
        await axios.post(`${baseURl}/order-product`, {
          ...values,
          budget: `${showValue}$`,
          files: values.files,
        });
        router.push('/thank-you');
      } catch (err) {
        console.log(err);
      }
    };

    const removeFile = (id, setFieldValue) => {
      setFieldValue(
        'files',
        fileItem.filter((file) => {
          return file.id !== id;
        })
      );
      const filtered = files.filter((item) => item.id !== id);
      setFiles(filtered);
    };

    const handleTextareaChange = (e, setFieldValue) => {
      setFieldValue('about_project', e.target.value);
      setTextAreaHeight(textAreaHref.current.scrollHeight);
    };

    return (
      <View
        {...props}
        t={t}
        onSubmit={onSubmit}
        showValue={showValue}
        setShowValue={setShowValue}
        handleFiles={handleFiles}
        removeFile={removeFile}
        textAreaHref={textAreaHref}
        textAreaHeight={textAreaHeight}
        handleTextareaChange={handleTextareaChange}
        fileError={fileError}
        files={files}
      />
    );
  };
  return Result;
};
