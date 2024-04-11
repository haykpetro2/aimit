import * as yup from 'yup';

export const initialState = {
  email: '',
};

export const validationSchema = (t) => {
  return yup.object().shape({
    email: yup.string().email(t('invalid e-mail address')),
  });
};
