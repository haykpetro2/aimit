import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { initialState, validationSchema } from './constants';
import { formData } from '../../views/singleCareers/constants';
import CustomRange from './Components/CustomRange';
import PrimaryButton from '../PrimaryButton';
import styles from '../GetInTouch/style.module.scss';

export const View = ({
  t,
  onSubmit,
  handleFiles,
  showValue,
  setShowValue,
  id,
  removeFile,
  textAreaHref,
  textAreaHeight,
  handleTextareaChange,
  fileError,
  files,
}) => {
  return (
    <div className={styles['getInTouch-form-overlay']}>
      <div>
        <Formik
          initialValues={initialState}
          validateOnBlur
          onSubmit={onSubmit}
          validationSchema={() => validationSchema(t)}
        >
          {({ values, setFieldValue }) => {
            return (
              <div className={styles.form}>
                <Form action="#" method="/">
                  <div className={`${styles['form-group']} ${styles['user-infos']}`}>
                    {formData.map(({ name, placeholder }) => {
                      return (
                        <div key={name} className={`${styles['input-overlay']} col_}`}>
                          <Field type="text" placeholder={t(placeholder)} name={name} />
                          <ErrorMessage component="p" name={name} className="required_field" />
                        </div>
                      );
                    })}
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-config']}`}>
                    <div className={styles['select-overlay']}>
                      <Field as="select" id="" name="achieve">
                        <option style={{ display: 'none' }}>{t('placeholderAchieve')}</option>
                        <option>E-commerce</option>
                        <option>Crm</option>
                        <option>Healtcare</option>
                        <option>Logistics</option>
                        <option>E-learning</option>
                        <option>Fintech</option>
                        <option>Legal</option>
                        <option>Other</option>
                      </Field>
                      <ErrorMessage component="div" name="achieve" className="required_field" />
                    </div>
                    {values.achieve === 'Other' && (
                      <div className={`${styles['input-overlay']}`} style={{ marginTop: '15px' }}>
                        <Field type="text" placeholder="Your Industry" name="your_industry" />
                      </div>
                    )}
                  </div>
                  <CustomRange showValue={showValue} setShowValue={setShowValue} />
                  <div className={`${styles['form-group']} ${styles['form-group-config']}`}>
                    <div className={styles['input-overlay']}>
                      <Field
                        innerRef={textAreaHref}
                        as="textarea"
                        style={{ height: `${textAreaHeight}px` }}
                        onChange={(e) => handleTextareaChange(e, setFieldValue)}
                        type="text"
                        placeholder={t('placeholderProject')}
                        name="about_project"
                      />
                      <ErrorMessage
                        component="div"
                        name="about_project"
                        className="required_field"
                      />
                    </div>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-config']}`}>
                    <div className={styles['file-overlay']}>
                      <label htmlFor={id}>
                        <span className={styles['file-name']}>{t('attachUseful')}</span>
                      </label>
                      <div>
                        {files.length
                          ? files.map(({ name, id }) => {
                              return (
                                <div className={styles['files-list']} key={name}>
                                  <p>{name}</p>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(id, setFieldValue)}
                                  >
                                    {' '}
                                  </button>
                                </div>
                              );
                            })
                          : null}
                      </div>
                      <input
                        id={id}
                        name="files"
                        type="file"
                        accept=".jpg, .jpeg,.png,.pdf, .word,.exel,.docx"
                        multiple
                        onChange={(e) => handleFiles(e, setFieldValue, values)}
                      />

                      {fileError ? (
                        <div className="required_field">{fileError}</div>
                      ) : (
                        <ErrorMessage component="div" name="files" className="required_field" />
                      )}
                    </div>
                  </div>
                  <div className={styles['submit-button']}>
                    <PrimaryButton isSubmit text={t('submit')} />
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

View.propTypes = {
  t: PropTypes.func,
  onSubmit: PropTypes.func,
  handleFile: PropTypes.func,
  uploadedFile: PropTypes.string,
  showValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setShowValue: PropTypes.func,
  handleFiles: PropTypes.func,
  removeFile: PropTypes.func,
  id: PropTypes.string,
  textAreaHref: PropTypes.object,
  textAreaHeight: PropTypes.number,
  handleTextareaChange: PropTypes.func,
  fileError: PropTypes.string,
  files: PropTypes.array,
};
