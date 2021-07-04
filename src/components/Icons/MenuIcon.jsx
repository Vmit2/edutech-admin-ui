import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

// From feather icons:
// https://github.com/feathericons/feather/blob/master/icons/menu.svg
function MenuIcon(props) {
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
      <path d="M3 12h18M3 6h18M3 18h18" />
    </SvgIcon>
  )
}

export default MenuIcon
