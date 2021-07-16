/* eslint-disable react/prop-types */
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { createElement, forwardRef } from "react";

const Chip = forwardRef((props, ref) => {
  const {
    component,
    classes,
    className,
    clickable,
    disabled,
    endIcon,
    isLoading,
    startIcon,
    children,
    ...other
  } = props;

  const isDisabled = disabled || isLoading;

  const classNames = clsx(className, classes.root, {
    [classes.disabled]: isDisabled,
    [classes.clickable]: clickable,
  });

  const elProps = {
    className: classNames,
    ref,
    ...other,
  };

  if (clickable) {
    elProps.role = "button";
    elProps.tabIndex = "0";
  }

  return createElement(component, elProps, [
    startIcon && (
      <span className={classes.startIcon} key="startIcon">
        {startIcon}
      </span>
    ),
    <span className={classes.children} key="children">
      {isLoading ? <CircularProgress color="inherit" size={16} /> : children}
    </span>,
    endIcon && (
      <span className={classes.endIcon} key="endIcon">
        {endIcon}
      </span>
    ),
  ]);
});

Chip.defaultProps = {
  component: "div",
  clickable: false,
  disabled: false,
  isLoading: false,
};

const BaseChip = withStyles((theme) => ({
  root: {
    height: 36,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    ...theme.typography.body1,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "normal",
  },
  children: {
    margin: "0 12px",
  },
  startIcon: {
    display: "inherit",
    marginLeft: 8,
    marginRight: -4,
  },
  endIcon: {
    display: "inherit",
    marginLeft: -4,
    marginRight: 8,
  },
  clickable: {
    cursor: "pointer",
  },
  disabled: {
    cursor: "default",
    pointerEvents: "none",
    opacity: 0.5,
  },
}))(Chip);

export default BaseChip;
