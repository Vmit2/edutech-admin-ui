import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function RowsIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M5 8v47h53V8H5zm48 42H10v-9h43v9zm0-14H10v-9h43v9zm0-14H10v-9h43v9z" />
    </SvgIcon>
  )
}

export default RowsIcon
