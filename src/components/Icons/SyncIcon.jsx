import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function SyncIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M34.5 52c-5.56 0-10.037-1.999-14.52-6.481A2456.355 2456.355 0 0113.5 39H23v-5H5v18h5v-9.43c2.29 2.31 4.877 4.916 6.444 6.484C21.866 54.476 27.603 57 34.5 57c13.005 0 23.671-10.187 24.45-23h-5.026c-.77 10.052-9.178 18-19.424 18zM54 12v9.43c-2.29-2.31-4.877-4.916-6.444-6.484C42.134 9.524 36.397 7 29.5 7 16.495 7 5.829 17.186 5.05 30h5.026c.77-10.052 9.178-18 19.424-18 5.56 0 10.037 1.999 14.52 6.481 1.576 1.576 4.183 4.202 6.48 6.519H41v5h18V12h-5z" />
    </SvgIcon>
  )
}

export default SyncIcon
