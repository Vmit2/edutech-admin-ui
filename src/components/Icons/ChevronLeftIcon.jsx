import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ChevronLeftIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M44.896 12.627l-3.535-3.535-22.442 22.442 22.442 22.44 3.535-3.534-18.907-18.906z" />
    </SvgIcon>
  )
}

export default ChevronLeftIcon
