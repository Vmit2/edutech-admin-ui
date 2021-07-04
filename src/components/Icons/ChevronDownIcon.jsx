import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ChevronDownIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M50.349 18.987L31.442 37.893 12.535 18.987 9 22.522l22.442 22.441 22.442-22.441z" />
    </SvgIcon>
  )
}

export default ChevronDownIcon
