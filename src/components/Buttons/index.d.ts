import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

interface EdutechButtonClasses {
  root: {}
  startIcon: {}
  endIcon: {}
  disabled: {}
  small: {}
  medium: {}
  full: {}
}

interface EdutechButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  component?: 'button' | 'div'
  classes?: EdutechButtonClasses
  disabled?: boolean
  fullWidth?: boolean
  endIcon?: ReactElement
  isLoading?: boolean
  size?: 'extraSmall' | 'small' | 'medium'
  startIcon?: ReactElement
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}

declare const PrimaryButton: React.FunctionComponent<EdutechButtonProps>
declare const SecondaryThemeButton: React.FunctionComponent<EdutechButtonProps>
declare const SecondaryButton: React.FunctionComponent<EdutechButtonProps>
declare const TertiaryButton: React.FunctionComponent<EdutechButtonProps>
declare const TertiaryErrorButton: React.FunctionComponent<EdutechButtonProps>
