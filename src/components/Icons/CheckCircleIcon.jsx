import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

// From feather icons:
// https://github.com/feathericons/feather/blob/master/icons/check-circle.svg
function CheckCircleIcon(props) {
  return (
    <SvgIcon
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{ fill: 'none' }}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </SvgIcon>
  )
}

export default CheckCircleIcon
