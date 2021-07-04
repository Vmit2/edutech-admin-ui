import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function AddFileIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M30 50h5V40h10v-5H30v15zM9 5v54h28.601L54 42.54V5H9zm40 35.476L35.525 54H14V10h35v30.476zM29 31h5v-6h6v-5h-6v-6h-5v6h-6v5h6v6z" />
    </SvgIcon>
  )
}

export default AddFileIcon
