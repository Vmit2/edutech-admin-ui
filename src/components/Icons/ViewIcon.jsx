import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ViewIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M38.184 28.873C40.524 33.538 37.1 39 31.93 39c-3.86 0-6.965-3.14-6.965-7S28 25 32 25v-5c-7 0-12.035 5.383-12.035 12s5.348 12 11.965 12 12-5.383 12-12c0-1.928-.467-3.745-1.279-5.36l-4.467 2.233zM31.93 11c-15.04 0-28 14.086-28 21 0 6.915 12.96 21 28 21s28.001-14.085 28.001-21c0-6.914-12.961-21-28-21zm0 37c-12.944 0-23-12.762-23-16 0-3.238 10.056-16 23-16s23 12.762 23 16c0 3.238-10.056 16-23 16z" />
    </SvgIcon>
  )
}

export default ViewIcon
