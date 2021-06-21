import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import TextInputLabel from './TextInputLabel';
import TextInputAdornment from './TextInputAdornment';
import TextInputError from './TextInputError';
import TextInputHint from './TextInputHint';

const useStyles = makeStyles((theme) => {
  return {
    disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    label: {
      marginBottom: 14,
      '& label': {
        color: theme.palette.text.label,
        fontSize: 16,
        fontWeight: 600,
      },
    },
    root: {
      cursor: (props) => (props.clickable ? 'pointer' : 'text'),
      color: theme.palette.text.label,
      backgroundColor: theme.palette.module.background,
      borderColor: theme.palette.module.background,
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 12,
      '&:focus-within': {
        color: theme.palette.text.label,
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.module.border,
        borderRadius: 12,
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.08)',
      },
    },
    rootError: {
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.background,
      borderColor: theme.palette.error.main,
      '&:focus-within': {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
      },
    },
    rootMultiline: {
      padding: '18.5px 14px',
    },
    rootAdornedStart: {
      paddingLeft: 18,
    },
    rootAdornedEnd: {
      paddingRight: 18,
    },
    input: {
      cursor: (props) => (props.clickable ? 'pointer' : 'text'),
      height: 20,
      padding: 18,
    },
    inputMultiline: {
      height: 'auto',
      padding: 0,
    },
    adornment: {
      display: 'flex',
      alignItems: 'center',
      color: (props) =>
        props.errorText ? theme.palette.error.main : theme.palette.text.label,
      whiteSpace: 'nowrap',
    },
  }
})

/**
 * Wraps the material-ui InpuseBase component to provide custom styling.
 *
 * https://material-ui.com/api/input-base/
 *
 * @returns {JSX.Element}
 */
function TextInput({
  // Destructure so DateInput usage doesn't throw a warning.
  // eslint-disable-next-line react/prop-types
  InputProps,
  // TODO: remove this once all helperText is removed
  // eslint-disable-next-line react/prop-types
  helperText,

  className,
  clickable,
  disabled,
  error,
  errorText,
  hintText,
  id,
  inputBaseRef,
  inputRootClassNames,
  inputClassNames,
  inputProps,
  label,
  name,
  placeholder,
  size,
  startAdornment,
  startIcon,
  endAdornment,
  endIcon,
  ...props
}) {
  // TODO: remove this once all helperText is removed
  // eslint-disable-next-line no-param-reassign
  errorText = errorText || helperText

  const classes = useStyles({ clickable, disabled, errorText })

  const inputId = useMemo(() => id || uniqueId('mlm-input-'), [id])

  const wrapperClasses = clsx(className, {
    [classes.disabled]: disabled,
  })
  const rootClasses = clsx(inputRootClassNames, classes.root, {
    [classes.rootError]: !!errorText,
  })
  const inputClasses = clsx(inputClassNames, classes.input)

  return (
    <div className={wrapperClasses}>
      {label && <TextInputLabel htmlFor={inputId} value={label} />}

      <InputBase
        classes={{
          root: rootClasses,
          adornedStart: classes.rootAdornedStart,
          adornedEnd: classes.rootAdornedEnd,
          multiline: classes.rootMultiline,
          input: inputClasses,
          inputMultiline: classes.inputMultiline,
        }}
        disabled={!!disabled}
        endAdornment={
          (endIcon || endAdornment) && (
            <TextInputAdornment error={!!errorText} icon={endIcon}>
              {endAdornment}
            </TextInputAdornment>
          )
        }
        id={inputId}
        inputProps={inputProps}
        name={name}
        placeholder={placeholder}
        ref={inputBaseRef}
        startAdornment={
          (startIcon || startAdornment) && (
            <TextInputAdornment error={!!errorText} icon={startIcon}>
              {startAdornment}
            </TextInputAdornment>
          )
        }
        {...props}
      />

      <TextInputError value={errorText} />
      <TextInputHint value={hintText} />
    </div>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  inputRootClassNames: PropTypes.string,
  inputClassNames: PropTypes.string,
  clickable: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  hintText: PropTypes.string,
  id: PropTypes.string,
  inputBaseRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  inputProps: PropTypes.object,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  startAdornment: PropTypes.node,
  startIcon: PropTypes.node,
  endAdornment: PropTypes.node,
  endIcon: PropTypes.node,
}

export default TextInput
