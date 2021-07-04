import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function LeftIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M58 29H15.496L35.624 8.86l-3.535-3.543-26.163 26.16 26.163 26.16 3.535-3.522L15.496 34H58z" />
    </SvgIcon>
  )
}

export default LeftIcon
