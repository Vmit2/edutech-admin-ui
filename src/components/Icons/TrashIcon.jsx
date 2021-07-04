import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function TrashIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M43.708 14L40.68 5H23.234l-3.023 9H10v5h44v-5H43.708zm-18.222 0l1.344-4h10.257l1.345 4H25.486zM46 53H18V23h-5v35h38V23h-5v30zM24 23v25h5V23h-5zm11 0v25h5V23h-5z" />
    </SvgIcon>
  )
}

export default TrashIcon
