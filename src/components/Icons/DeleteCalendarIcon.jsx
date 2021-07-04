import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function DeleteCalendarIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M38.757 26.976l-7.225 7.225-7.225-7.225-3.228 3.228 7.225 7.225-7.225 7.225 3.228 3.228 7.225-7.225 7.225 7.225 3.228-3.228-7.225-7.225 7.225-7.225-3.228-3.228zM22 17h15v-5H22V4h-5v17h5v-4zm24-5V4h-5v17h5v-4h8v37H9V17h4v-5H4v47h55V12H46z" />
    </SvgIcon>
  )
}

export default DeleteCalendarIcon
