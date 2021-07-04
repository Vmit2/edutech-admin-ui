import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function BuildingIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M20 32h5v-7h-5v7zm0 12h5v-7h-5v7zm9 0h5v-7h-5v7zm19.452-31H45V7.475C45 5.545 43.382 4 41.452 4h-20C19.521 4 18 5.545 18 7.475V13h-3.549C12.521 13 11 14.545 11 16.475V60h14v-5h-9V18h7V9h17v9h7v37H34v-4h-5v9h23V16.475C52 14.545 50.382 13 48.452 13zM43 25h-5v7h5v-7zm-5 19h5v-7h-5v7zm-4-19h-5v7h5v-7z" />
    </SvgIcon>
  )
}

export default BuildingIcon
