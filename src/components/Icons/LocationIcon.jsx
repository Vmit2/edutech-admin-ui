import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function LocationIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M31.43 15.99a6.5 6.5 0 00-6.5 6.5 6.5 6.5 0 1013 0c0-3.59-2.909-6.5-6.5-6.5zm0-11.999c-11.305 0-20.5 9.227-20.5 20.567 0 11.834 7.284 19.462 20.5 36.433 13.148-16.901 20.5-24.563 20.5-36.433 0-11.34-9.196-20.566-20.5-20.567zM15.767 24.494c0-8.664 7.026-15.713 15.663-15.713s15.664 7.049 15.664 15.713c0 9.487-5.92 16.036-15.664 28.576-9.755-12.55-15.663-19.104-15.663-28.576z" />
    </SvgIcon>
  )
}

export default LocationIcon
