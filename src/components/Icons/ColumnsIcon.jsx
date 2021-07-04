import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ColumnsIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M5 8v47h53V8H5zm16 42H10V13h11v37zm16 0H26V13h11v37zm16 0H42V13h11v37z" />
    </SvgIcon>
  )
}

export default ColumnsIcon
