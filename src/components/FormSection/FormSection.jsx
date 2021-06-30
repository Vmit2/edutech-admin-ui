import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import InfoIcon from '../Icons/InfoIcon';
import TooltipIcon from '../TooltipIcon';
import FormSectionTitleText from '../Typography/FormSectionTitleText';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 30,
  },
  tooltip: {
    marginLeft: 15,
  },
  noMarginTop: {
    marginTop: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
}))

function FormSection({
  noMarginTop,
  noMarginBottom,
  title,
  tooltipTitle,
  children,
}) {
  const classes = useStyles()
  const classNames = clsx(classes.root, {
    [classes.noMarginTop]: noMarginTop,
    [classes.noMarginBottom]: noMarginBottom,
  })

  return (
    <>
      {(title || tooltipTitle) && (
        <div className={classNames}>
          {title && <FormSectionTitleText value={title} />}

          {tooltipTitle && (
            <TooltipIcon
              className={classes.tooltip}
              icon={<InfoIcon />}
              title={tooltipTitle}
            />
          )}
        </div>
      )}

      {children}
    </>
  )
}

FormSection.propTypes = {
  noMarginTop: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
  title: PropTypes.string,
  tooltipTitle: PropTypes.node,
  children: PropTypes.node.isRequired,
}

export default FormSection
