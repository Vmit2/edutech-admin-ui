import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { login } from '../../redux/actions/authActions';
import FormTranslator from './FormTranslator';

export default function useLoginForm({ onSuccess }) {
  const dispatch = useDispatch()
  const [apiErrorMessage, setApiErrorMessage] = useState(null)

  const initialValues = useMemo(() => FormTranslator.apiToForm(), [])

  const onSubmit = async (values) => {
    setApiErrorMessage(null)

    const body = FormTranslator.formToApi(values)

    const result = await submitForm({ dispatch, body })

    if (result.error) {
      setApiErrorMessage(result.apiErrorMessage)

      return
    }

    const newFormValues = FormTranslator.apiToForm(result.data)

    if (onSuccess) {
      await onSuccess({
        apiData: result.data,
        submittedFormValues: values,
        newFormValues,
      })
    }
  }

  const form = useForm({
    initialValues,
    onSubmit,
    validationSchema: FormTranslator.validationSchema,
    validateOnChange: false,
  })

  return {
    apiErrorMessage,
    ...form,
  }
}

async function submitForm({ dispatch, body }) {
  try {
    const data = await dispatch(login(body.email, body.password))

    return {
      error: false,
      data,
    }
  } catch (err) {
    // TODO: Improve 401 api response message
    const apiErrorMessage = err.wallaError
      ? "Invalid login credentials"
      : "An unexpected error occurred. Please try again."

    return {
      error: true,
      apiErrorMessage,
    }
  }
}
