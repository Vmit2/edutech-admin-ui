import { object, string } from 'yup'

function apiToForm() {
  return {
    username: '',
    password: '',
  }
}

function formToApi(formValues) {
  return {
    username: formValues.username,
    password: formValues.password,
  }
}

const validationSchema = object().shape({
  username: string().email().required(),
  password: string().required(),
})

export default {
  apiToForm,
  formToApi,
  validationSchema,
}
