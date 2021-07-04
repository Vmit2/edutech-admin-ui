import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function EmailIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M52 44.443l-9.031-11.37-4.022 2.98L47.637 47H15.37l9.184-11.565-4.018-2.979L11 44.463V25.674l-5-4.23V52h51V22.407l-5 4.23v17.806zM6 12v4.204l21.468 16.31c2.637 1.953 6.767 1.953 9.406 0L57 17.167V12H6zm27.895 16.596c-.889.657-2.568.659-3.454.001L14.78 17h34.774l-15.66 11.596z" />
    </SvgIcon>
  )
}

export default EmailIcon
