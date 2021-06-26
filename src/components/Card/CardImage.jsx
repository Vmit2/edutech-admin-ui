import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() => ({
  img: {
    display: 'block',
    width: '100%',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '16px 16px 0 0 ',
  },
}))

function CardImage({ alt, ...props }) {
  const classes = useStyles()

  return <img alt={alt} className={classes.img} {...props} />
}

CardImage.propTypes = {
  alt: PropTypes.string,
}

export default CardImage
