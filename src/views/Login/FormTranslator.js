import { object, string } from 'yup';

function apiToForm() {
  return {
    email: '',
    password: '',
  }
}

function formToApi(formValues) {
  return {
    email: formValues.email,
    password: formValues.password,
  }
}

const validationSchema = object().shape({
  email: string().email().required(),
  password: string().required(),
})

export default {
  apiToForm,
  formToApi,
  validationSchema,
}
