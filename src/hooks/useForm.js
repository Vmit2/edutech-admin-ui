/**
 * Wrapper around useFormik hook.
 *
 * For valid options:
 * https://formik.org/docs/api/formik
 */
import { useFormik } from 'formik';
import startCase from 'lodash/startCase';

export function useForm(formikConfig = {}) {
  const formik = useFormik(formikConfig)

  const hasError = (field, { ignoreTouched } = {}) => {
    const hasErrorMessage = !!formik.errors[field]
    const hasBeenTouched = !!ignoreTouched || !!formik.touched[field]

    return hasErrorMessage && hasBeenTouched
  }

  const getError = (field, opts) => {
    if (!hasError(field, opts)) {
      return undefined
    }

    const words = formik.errors[field].split(' ')

    words[0] = startCase(words[0])

    return words.join(' ')
  }

  return {
    hasError,
    getError,
    errors: formik.errors,
    touched: formik.touched,
    values: formik.values,
    isSubmitting: formik.isSubmitting,
    resetForm: formik.resetForm,
    setFieldValue: formik.setFieldValue,
    setValues: formik.setValues,
    handleBlur: formik.handleBlur,
    handleChange: formik.handleChange,
    handleSubmit: formik.handleSubmit,
    submitForm: formik.submitForm,
  }
}
