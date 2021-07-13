import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import { isEmpty } from '../../utils/isEmpty'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  noMarginTop: {
    marginTop: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
}))

function ListPagination({
  noMarginTop,
  noMarginBottom,
  currentPage,
  totalPages,
  onChange,
}) {
  const classes = useStyles()
  const rootClassNames = clsx(classes.root, {
    [classes.noMarginTop]: noMarginTop,
    [classes.noMarginBottom]: noMarginBottom,
  })

  if (isEmpty(currentPage) || !totalPages) {
    return null
  }

  return (
    <div className={rootClassNames}>
      <Pagination count={totalPages} page={currentPage} onChange={onChange} />
    </div>
  )
}

ListPagination.propTypes = {
  noMarginTop: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default ListPagination
