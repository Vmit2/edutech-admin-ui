import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

// From feather icons:
// https://github.com/feathericons/feather/blob/master/icons/plus-circle.svg
function PlusCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </SvgIcon>
  )
}

export default PlusCircleIcon
