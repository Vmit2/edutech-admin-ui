import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function MoveIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path
        d="M47.473 43.995l12.469-12.468L47.445 19.03l-3.535 3.535L50.344 29H34V12.543l6.432 6.461 3.52-3.536L31.476 3l-12.5 12.495 3.563 3.536L29 12.598V29H12.538l6.434-6.434-3.536-3.535L2.94 31.527l12.47 12.468 3.535-3.535-6.46-6.46H29v16.401l-6.463-6.433-3.55 3.535L31.476 60 43.94 47.531l-3.508-3.536L34 50.456V34h16.397l-6.46 6.46z"
        fill="#565D64"
      />
    </SvgIcon>
  )
}

export default MoveIcon
