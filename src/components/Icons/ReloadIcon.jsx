import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function ReloadIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M57 32.5C57 18.44 45.56 7 31.5 7c-.844 0-1.677.044-2.5.124v5.044c.821-.1 1.652-.168 2.5-.168C42.804 12 52 21.196 52 32.5c0 7.038-3.579 13.238-9 16.927V40h-5v18h18v-5h-9.387C52.903 48.352 57 40.903 57 32.5zm-46 0c0-7.038 3.579-13.238 9-16.927V25h5V7H7v4.99h9.387C10.097 16.638 6 24.097 6 32.5 6 46.56 17.44 58 31.5 58c.844 0 1.677-.044 2.5-.124v-5.044c-.821.1-1.652.168-2.5.168C20.196 53 11 43.804 11 32.5z" />
    </SvgIcon>
  )
}

export default ReloadIcon
