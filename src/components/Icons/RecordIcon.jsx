import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function RecordIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M31.5 7C17.985 7 7 17.932 7 31.5 6.998 45.04 17.96 56 31.502 56c13.571 0 24.501-10.986 24.5-24.5C56.002 17.963 45.047 7 31.5 7zm13.79 38.288A19.368 19.368 0 0131.504 51C14.297 51 5.377 30.044 17.71 17.71 24.232 11.192 32.504 12 31.504 12c17.362 0 25.989 21.088 13.786 33.288z" />
    </SvgIcon>
  )
}

export default RecordIcon
