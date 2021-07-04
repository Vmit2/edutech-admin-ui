import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function RepeatIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M20.481 20h22.056l-6.67 6.798 3.526 3.59 12.698-12.7L39.393 4.975l-3.527 3.431L42.55 15H20.48C7.86 15 .437 29.698 8.128 39.953l3.57-3.606C7.153 29.34 12.274 20 20.482 20zm34.307 1.45l-3.572 3.582C55.769 32.057 50.608 41 42.43 41H20.386l6.668-6.573-3.527-3.48L10.829 43.7l12.698 12.742 3.527-3.639L20.368 46H42.43c12.629 0 20.032-14.308 12.358-24.55z" />
    </SvgIcon>
  )
}

export default RepeatIcon
