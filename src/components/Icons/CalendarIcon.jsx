import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function AlertIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M44 49h5v-5h-5v5zm6-24H13v5h37v-5zm-1 9h-5v5h5v-5zM22 17h15v-5H22V4h-5v17h5v-4zm17 17h-5v5h5v-5zm7-22V4h-5v17h5v-4h8v37H9V17h4v-5H4v47h55V12H46zM34 49h5v-5h-5v5zm-20 0h5v-5h-5v5zm5-15h-5v5h5v-5zm10 0h-5v5h5v-5zm-5 15h5v-5h-5v5z" />
    </SvgIcon>
  )
}

export default AlertIcon
