import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styles from './style.module.scss';
import { initialState, validationSchema } from './constants';
import Success from '../../../../../../svgs/Success';

export const View = ({ onSubmit, t, isSuccess }) => {
  return (
    <div>
      {isSuccess ? (
        <div className={styles['subscripe-success']}>
          <p className={styles['subscripe-ssuccessfully']}>You have subscribed successfully</p>
          <Success />
        </div>
      ) : (
        <Formik
          validationSchema={() => validationSchema(t)}
          initialValues={initialState}
          validateOnBlur
          onSubmit={onSubmit}
        >
          <Form action="#" method="/">
            <div className={styles['subscripe-overlay']}>
              <div className={styles['input-overaly']}>
                <Field type="email" placeholder="E-mail" name="email" />
                <div className={styles['input-error']}>
                  <ErrorMessage component="div" name="email" />
                </div>
              </div>
              <div className={styles['button-overlay']}>
                <button className={styles['button-subscribe']} type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
};

View.propTypes = {
  t: PropTypes.func,
  onSubmit: PropTypes.func,
  isSuccess: PropTypes.bool,
};
