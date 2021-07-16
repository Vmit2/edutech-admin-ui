import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";
import { ActiveStatusValues } from "../../../config/constants";
import { getUserStatusLabel } from "../../../utils/format/getUserStatusLabel";
import RadioGroupInput from "../../RadioGroupInput";

function StatusFilterOptions({ selectedKey, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <RadioGroupInput
          row
          options={ActiveStatusValues.map((value) => ({
            value,
            label: getUserStatusLabel(value),
          }))}
          value={selectedKey}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}

StatusFilterOptions.propTypes = {
  selectedKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StatusFilterOptions;
