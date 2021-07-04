import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ChevronUpIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M31.441 19.012L9 41.453l3.535 3.535 18.906-18.906 18.907 18.906 3.535-3.535z" />
    </SvgIcon>
  )
}

export default ChevronUpIcon
