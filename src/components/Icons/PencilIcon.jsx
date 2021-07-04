import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function PencilIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M17.53 5.01c-3.46 0-4.386 1.69-11.668 8.97a6.507 6.507 0 000 9.193l6.01 6.01 16.265-16.264C21.826 6.609 20.914 5.01 17.53 5.01zm-5.657 17.102c-4.375-4.374-4.564-2.51 4.596-11.667a1.51 1.51 0 012.122 0l2.474 2.474-9.192 9.193zm39.052 13.594l-19.96-19.958-3.535 3.535 19.13 19.13 3.465 10.289-2.368 2.368-10.29-3.465-19.13-19.129-3.535 3.535L34.659 51.97l24.524 8.259-8.258-24.522zm-8.123 4.606l-18.201-18.2-3.536 3.535 18.202 18.2c2.335 2.335 5.876-1.197 3.535-3.535z" />
    </SvgIcon>
  )
}

export default PencilIcon
