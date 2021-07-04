import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

function FacetimeIcon(props) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
      <path d="M0 0h64v64H0z" fill="none" />
      <path d="M36.485 13H11.484c-3.415 0-6.218 3-6.475 6H2v5h8v-4.505c0-.827.657-1.495 1.484-1.495h25c.828 0 1.516.668 1.516 1.495v24c0 .827-.688 1.505-1.515 1.505H11.484A1.492 1.492 0 0110 43.495V28H2v5h3v10.495C5 47.08 7.9 50 11.484 50h25C40.07 50 43 47.08 43 43.495v-24C43 15.911 40.069 13 36.485 13zM47 24.06v6.044l10-6.79v16.362l-10-6.79v6.044l15 10.184V13.876L47 24.061z" />
    </SvgIcon>
  )
}

export default FacetimeIcon
