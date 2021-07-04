import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

// Gizmo refers to this as 'delete'
function CloseIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M49 18.06l-3.535-3.536L32.029 27.96 18.594 14.524l-3.535 3.536 13.435 13.435L15.06 44.931l3.535 3.535L32.029 35.03l13.436 13.436L49 44.93 35.565 31.495z" />
    </SvgIcon>
  )
}

export default CloseIcon
