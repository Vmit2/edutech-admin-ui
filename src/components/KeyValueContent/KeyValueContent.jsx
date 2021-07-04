import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import FormInfoText from "../Typography/FormInfoText/FormInfoText";
import SummaryResultsText from "../Typography/SummaryResultsText/SummaryResultsText";

const useStyles = makeStyles((theme) => ({
  label: {
    borderColor: theme.palette.module.border,
  },
}));

const KeyValueContent = ({ label, value }) => {
  const classes = useStyles();
  return (
    <Grid>
      {/* <Grid item xs={6}> */}
      <FormInfoText noMarginTop noMarginBottom>
        {label}
      </FormInfoText>
      {/* </Grid> */}
      {/* <Grid item xs={6} align="left"> */}
      <SummaryResultsText noMarginTop noMarginBottom value={value} />
      {/* </Grid> */}
    </Grid>
  );
};

export default KeyValueContent;
