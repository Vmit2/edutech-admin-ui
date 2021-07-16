import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import CheckIcon from "../Icons/CheckIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    width: 28,
    height: 28,
    backgroundColor: theme.palette.module.background,
    borderRadius: 4,
  },
  checkedIcon: {
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 4,
  },
  labelRoot: {
    marginLeft: 0,
    marginRight: 30,
  },
  label: {
    color: theme.palette.text.secondary,
    "&.Mui-disabled": {
      color: theme.palette.text.secondary,
      opacity: 0.5,
    },
  },
  checkedLabel: {
    color: theme.palette.text.primary,
  },
}));

function CheckboxInput({ checked, label, ...props }) {
  const classes = useStyles();

  const checkbox = (
    <Checkbox
      {...props}
      checked={checked}
      checkedIcon={
        <div className={classes.checkedIcon}>
          <CheckIcon fontSize="small" htmlColor="#ffffff" />
        </div>
      }
      className={classes.root}
      icon={<span className={classes.icon} />}
    />
  );

  if (label) {
    return (
      <FormControlLabel
        checked={checked}
        classes={{
          root: classes.labelRoot,
          label: clsx(classes.label, {
            [classes.checkedLabel]: checked,
          }),
        }}
        control={checkbox}
        label={label}
      />
    );
  }

  return checkbox;
}

CheckboxInput.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.node,
};

export default CheckboxInput;
