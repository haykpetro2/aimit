import * as yup from 'yup';

export const formData = [
  {
    placeholder: 'placeholderName',
    name: 'name',
  },
  {
    placeholder: 'placeholderPhone',
    name: 'phone',
  },
  {
    placeholder: 'placeholderMail',
    name: 'email',
  },
];

export const initialState = {
  name: '',
  phone: '',
  email: '',
  cv: '',
};

const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{1,6}$/im;

export const validationSchema = (t) => {
  return yup.object().shape({
    name: yup
      .string()
      .min(2, t('tooShort'))
      .max(50, t('tooLong'))
      .matches(/^[aA-zZ\s]+$/, t('onlyAlphabets'))
      .typeError(t('onlyString'))
      .required(t('required')),
    phone: yup.string().matches(phoneRegExp, t('phoneValid')).required('Required'),
    email: yup.string().email(t('emailValid')).required('Required'),
    cv: yup.string().required('Required'),
  });
};
