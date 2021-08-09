import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function MinusCircleIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M19 34h25v-5H19v5zm30.531-20.531C44.715 8.652 38.313 6 31.502 6H31.5C17.44 6 6 17.44 6 31.5c.001 6.812 2.653 13.215 7.47 18.031C18.286 54.348 24.688 57 31.498 57h.002C45.56 57 57 45.56 57 31.5c0-6.812-2.652-13.215-7.469-18.031zM31.5 52.189h-.002A20.552 20.552 0 0116.87 46.13a20.553 20.553 0 01-6.06-14.63c0-11.41 9.28-20.69 20.689-20.69h.001a20.553 20.553 0 0114.629 6.059A20.56 20.56 0 0152.19 31.5c0 11.408-9.282 20.69-20.69 20.69z" />
    </SvgIcon>
  )
}

export default MinusCircleIcon
