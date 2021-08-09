import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import TextInputError from "../TextInput/TextInputError";
import TextInputLabel from "../TextInput/TextInputLabel";

const useStyles = makeStyles((theme) => ({
  labelRoot: {
    marginLeft: 0,
    marginRight: 15,
  },
  label: {
    color: theme.palette.text.secondary,
  },
  checkedLabel: {
    color: theme.palette.text.primary,
  },
  icon: {
    borderRadius: "50%",
    width: 30,
    height: 30,
    border: `1px solid ${theme.palette.text.secondary}`,
    backgroundColor: theme.palette.module.white,
  },
  checkedIcon: {
    position: "relative",
    border: "none",
    backgroundColor: theme.palette.secondary.main,
    "&:before": {
      content: '""',
      position: "absolute",
      top: 10,
      right: 10,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: theme.palette.common.white,
    },
  },
}));

function RadioGroupInput({
  helperText,

  disabled,
  isBoolean,
  row,
  errorText,
  label,
  name,
  options,
  value,
  onChange,
}) {
  const classes = useStyles();

  errorText = errorText || helperText;

  const buildFakeChangeEvent = (newValue) => {
    return {
      target: { name, value: newValue },
    };
  };

  const handleChange = (event) => {
    let newValue = event.target.value;

    if (isBoolean) {
      newValue = newValue === "true";
    }

    onChange(buildFakeChangeEvent(newValue));
  };

  return (
    <div>
      {label && <TextInputLabel disabled={disabled} value={label} />}

      <RadioGroup name={name} row={row} value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <Box
            alignItems="center"
            display="flex"
            key={option.key || option.value}
            mt={option.labelContent && index !== 0 ? "14px" : undefined}
          >
            <FormControlLabel
              classes={{
                root: classes.labelRoot,
                label: clsx(classes.label, {
                  [classes.checkedLabel]: value === option.value,
                }),
              }}
              control={
                <Radio
                  checkedIcon={
                    <span className={clsx(classes.icon, classes.checkedIcon)} />
                  }
                  icon={<span className={classes.icon} />}
                />
              }
              disabled={disabled || !!option.disabled}
              label={option.label}
              value={option.value}
            />

            {option.labelContent ? option.labelContent : null}
          </Box>
        ))}
      </RadioGroup>

      <TextInputError value={errorText} />
    </div>
  );
}

RadioGroupInput.propTypes = {
  disabled: PropTypes.bool,
  isBoolean: PropTypes.bool,
  row: PropTypes.bool,
  errorText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default RadioGroupInput;
