import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ClockIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M34 16h-5v17.374l12.696 7.759 2.608-4.266L34 30.57V16zM31.496 6C17.438 6 6 17.439 6 31.5S17.439 57 31.5 57c6.811 0 13.216-2.653 18.031-7.469 4.817-4.816 7.47-11.22 7.469-18.031C57 17.439 45.561 6 31.496 6zm14.638 40.134A20.56 20.56 0 0131.5 52.195c-11.41 0-20.694-9.284-20.694-20.695 0-11.41 9.281-20.694 20.694-20.694 11.41 0 20.695 9.283 20.695 20.694a20.557 20.557 0 01-6.061 14.634z" />
    </SvgIcon>
  )
}

export default ClockIcon
