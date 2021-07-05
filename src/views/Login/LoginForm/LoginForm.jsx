import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import React from 'react';
import { PrimaryButton } from '../../../components/Buttons';
import FormActions from '../../../components/FormActions';
import {
  FormSection,
  FormSectionItem,
  FormSectionRow,
} from '../../../components/FormSection';
import TextInput from '../../../components/TextInput';
import useLoginForm from './useLoginForm';

function LoginForm({ onSuccess }) {
  const {
    apiErrorMessage,
    getError,
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useLoginForm({ onSuccess })

  return (
    <form onSubmit={handleSubmit}>
      {apiErrorMessage && (
        <Box mb={3}>
          <Alert severity="error">{apiErrorMessage}</Alert>
        </Box>
      )}

      <FormSection>
        <FormSectionRow>
          <FormSectionItem lg={12} md={12} xl={12}>
            <TextInput
              autoFocus
              fullWidth
              errorText={getError('username')}
              label="User Name"
              name="username"
              type="username"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </FormSectionItem>

          <FormSectionItem lg={12} md={12} xl={12}>
            <TextInput
              fullWidth
              errorText={getError('password')}
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </FormSectionItem>
        </FormSectionRow>
      </FormSection>

      <FormActions noDivider>
        <PrimaryButton
          fullWidth
          isLoading={isSubmitting}
          type="submit"
        >"Log In"</PrimaryButton>
      </FormActions>
    </form>
  )
}

LoginForm.propTypes = {
  onSuccess: PropTypes.func,
}

export default LoginForm