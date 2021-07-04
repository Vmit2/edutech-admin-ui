import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function AlertIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M29 48h5v-5h-5v5zm2.416-43.995L3.832 58H59L31.416 4.005zm0 10.99L50.832 53H12l19.416-38.005zM29 26v6l.916 8h3L34 32v-6h-5z" />
    </SvgIcon>
  )
}

export default AlertIcon
