import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function MapLocationIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M31.5 25a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1.967 21.933l1.967 2.505 1.967-2.506s5.058-6.444 7.047-9.023C44.302 32.994 48 27.596 48 20.429 48 11.372 40.599 4.002 31.5 4 22.401 4 15 11.371 15 20.43c0 7.166 3.698 12.564 7.486 17.478 1.988 2.58 7.047 9.025 7.047 9.025zM31.5 9C37.84 9 43 14.128 43 20.43c0 5.07-2.364 9.129-6.447 14.426a1375.045 1375.045 0 01-5.053 6.481c-1.637-2.09-3.88-4.96-5.053-6.481C22.364 29.559 20 25.5 20 20.43 20 14.128 25.16 9 31.5 9zm19.925 28h-5.28a81.104 81.104 0 01-2.463 3.35c-.347.45-.79 1.02-1.28 1.65h5.632l4.78 12H10.185l4.78-12h5.63c-.489-.63-.932-1.2-1.279-1.65A80.894 80.894 0 0116.855 37h-5.28L2.814 59h57.372l-8.761-22z" />
    </SvgIcon>
  )
}

export default MapLocationIcon