import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function SearchIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M43.534 40.093a20.25 20.25 0 004.34-12.563c0-18.201-22.09-27.212-34.861-14.44-7.982 7.98-7.984 20.898-.001 28.88 7.409 7.408 19.003 7.92 27.006 1.64l13.16 13.16 3.516-3.516-13.16-13.16zm-16.08 2.885c-13.815 0-20.566-16.732-10.925-26.372 9.739-9.739 26.372-2.733 26.372 10.923 0 8.536-6.908 15.449-15.448 15.449z" />
    </SvgIcon>
  )
}

export default SearchIcon
