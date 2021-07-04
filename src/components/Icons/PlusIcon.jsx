import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function PlusIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M34 29V10h-5v19H10v5h19v19h5V34h19v-5z" />
    </SvgIcon>
  )
}

export default PlusIcon
