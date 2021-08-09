import React from "react";
import PropTypes from "prop-types";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { Typography } from "@material-ui/core";
function CustomToggleButton(props) {
  const { selectedItem, handleChange, btnOne, btnTwo } = props;
  return (
    <div>
      <ToggleButtonGroup exclusive value={selectedItem} onChange={handleChange}>
        <ToggleButton value={btnOne}>
          <Typography>{btnOne}</Typography>
        </ToggleButton>

        <ToggleButton value={btnTwo}>
          <Typography>{btnTwo}</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

CustomToggleButton.propTypes = {
  selectedItem: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  btnOne: PropTypes.string.isRequired,
  btnTwo: PropTypes.string.isRequired,
};
export default CustomToggleButton;
