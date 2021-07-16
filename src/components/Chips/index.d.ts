import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'

interface WallaChipClasses {
  root: {}
  startIcon: {}
  endIcon: {}
  disabled: {}
  small: {}
  medium: {}
  full: {}
}

interface WallaChipProps extends HTMLAttributes<HTMLDivElement> {
  component?: 'div'
  className?: string
  classes?: WallaChipClasses
  disabled?: boolean
  endIcon?: ReactElement
  isLoading?: boolean
  startIcon?: ReactElement
  children: ReactNode
}

interface WallaMenuChipProps extends WallaChipProps {
  content: ReactElement
  isActive: boolean
  isOpen: boolean
  onClick?: () => void
  onClose?: () => void
}

declare const DefaultChip: React.FunctionComponent<WallaChipProps>
declare const MenuChip: React.FunctionComponent<WallaMenuChipProps>
