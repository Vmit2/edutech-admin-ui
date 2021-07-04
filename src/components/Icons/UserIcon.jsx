import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function UserIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M44.952 17.349c-.388-7.044-5.96-12.355-12.962-12.355-7 0-12.573 5.311-12.962 12.354-1.224 22.182 27.15 22.207 25.924 0zm-21.017.277c.564-10.202 15.548-10.184 16.11 0 .842 15.238-16.953 15.254-16.11 0zm8.053 19.371c-14.191 0-22.553 5.27-23.55 14.878L7.989 57h4.928c.46-5-.7-15.015 19.071-15.015C51.437 41.984 50.563 51 51.063 57h4.928c-.48-5 .583-20.003-24.003-20.003z" />
    </SvgIcon>
  )
}

export default UserIcon
