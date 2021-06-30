import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

interface WallaButtonClasses {
  root: {}
  startIcon: {}
  endIcon: {}
  disabled: {}
  small: {}
  medium: {}
  full: {}
}

interface WallaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  component?: 'button' | 'div'
  classes?: WallaButtonClasses
  disabled?: boolean
  fullWidth?: boolean
  endIcon?: ReactElement
  isLoading?: boolean
  size?: 'extraSmall' | 'small' | 'medium'
  startIcon?: ReactElement
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}

declare const PrimaryButton: React.FunctionComponent<WallaButtonProps>
declare const SecondaryThemeButton: React.FunctionComponent<WallaButtonProps>
declare const SecondaryButton: React.FunctionComponent<WallaButtonProps>
declare const TertiaryButton: React.FunctionComponent<WallaButtonProps>
declare const TertiaryErrorButton: React.FunctionComponent<WallaButtonProps>
