import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ChevronRightIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M22.447 9.091l-3.535 3.536 18.906 18.906-18.906 18.906 3.535 3.535 22.442-22.441z" />
    </SvgIcon>
  )
}

export default ChevronRightIcon
