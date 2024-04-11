import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { initialState, formData, validationSchema } from '../../../../constants';
import PrimaryButton from '../../../../../../components/PrimaryButton';
import styles from './style.module.scss';

export const View = ({ t, onSubmit, uploadedFile, handleFile, id, fileError }) => {
  return (
    <div>
      <Formik
        initialValues={initialState}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={() => validationSchema(t)}
      >
        {({ values, setFieldValue }) => {
          return (
            <div className={styles['form-overlay']}>
              <Form action="#" method="/">
                <div className={styles['form-headline']}>
                  <h2>{t('applyPosition')}</h2>
                </div>
                <div className={styles['form-body']}>
                  {formData.map(({ name, placeholder }) => {
                    return (
                      <div key={name} className={styles['input-overaly']}>
                        <Field type="text" placeholder={t(placeholder)} name={name} />
                        <ErrorMessage className="required_field" component="div" name={name} />
                      </div>
                    );
                  })}
                  <div className={styles['file-overlay']}>
                    <label htmlFor={id}>
                      <span className={styles['desktop-text']}>
                        <span>
                          <span className={styles['file-dragCv']}>{t('dragCv')}</span>
                          {uploadedFile ? (
                            <div>
                              <p>{uploadedFile}</p>
                            </div>
                          ) : (
                            <span className={styles['attach-txt']}>attach CV </span>
                          )}
                        </span>
                        <span className={styles['file-size']}>{t('fileSize')}</span>
                      </span>
                      <span className={styles['mobile-text']}>
                        <span className={styles['attach-file']} />
                        <span className={styles['attach-file-text']}>
                          {values.file ? values.file : 'Attach any files you feel would be useful'}
                        </span>
                      </span>
                    </label>
                    <input
                      id={id}
                      name="cv"
                      accept=".doc,.docx,.pdf,.jpg,.png"
                      type="file"
                      onChange={(e) => handleFile(e, setFieldValue)}
                    />
                    {fileError ? (
                      <div className="required_field">{fileError}</div>
                    ) : (
                      <ErrorMessage className="required_field" component="div" name="cv" />
                    )}
                  </div>
                  <div className={styles['submit-overlay']}>
                    <PrimaryButton isSubmit text={t('send')} />
                  </div>
                  <div className={styles.terms}>
                    <p>
                      {t('reCAPTCHA')}
                      <a href="#">Privacy Policy</a> {t('and')}
                      <a href="#">Terms of Service apply.</a>
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

View.propTypes = {
  t: PropTypes.func,
  onSubmit: PropTypes.func,
  handleFile: PropTypes.func,
  uploadedFile: PropTypes.string,
  id: PropTypes.string,
  fileError: PropTypes.string,
};
