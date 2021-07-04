import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

// From feather icons:
// https://github.com/feathericons/feather/blob/master/icons/more-horizontal.svg
function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </SvgIcon>
  )
}

export default MoreHorizontalIcon
