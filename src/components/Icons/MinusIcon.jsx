import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function MinusIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M11 29h43v5H11z" />
    </SvgIcon>
  )
}

export default MinusIcon
