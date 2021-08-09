import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'

interface ChipClasses {
  root: {}
  startIcon: {}
  endIcon: {}
  disabled: {}
  small: {}
  medium: {}
  full: {}
}

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  component?: 'div'
  className?: string
  classes?: ChipClasses
  disabled?: boolean
  endIcon?: ReactElement
  isLoading?: boolean
  startIcon?: ReactElement
  children: ReactNode
}

interface MenuChipProps extends ChipProps {
  content: ReactElement
  isActive: boolean
  isOpen: boolean
  onClick?: () => void
  onClose?: () => void
}

declare const DefaultChip: React.FunctionComponent<ChipProps>
declare const MenuChip: React.FunctionComponent<MenuChipProps>
