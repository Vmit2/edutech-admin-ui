import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function InfoIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M29 24h5v-5h-5v5zm0 20h5V27h-5v17zm2.5-38c-6.812 0-13.216 2.653-18.031 7.469C8.652 18.285 6 24.689 6 31.5 6 45.561 17.439 57 31.5 57h.004c6.81 0 13.213-2.653 18.03-7.469C54.347 44.715 57 38.311 57 31.5 57 17.439 45.561 6 31.5 6zm14.635 40.134a20.552 20.552 0 01-14.63 6.06H31.5c-11.41 0-20.695-9.283-20.695-20.694a20.564 20.564 0 016.06-14.634A20.565 20.565 0 0131.5 10.805c11.41 0 20.695 9.284 20.695 20.695a20.565 20.565 0 01-6.06 14.634z" />
    </SvgIcon>
  )
}

export default InfoIcon
