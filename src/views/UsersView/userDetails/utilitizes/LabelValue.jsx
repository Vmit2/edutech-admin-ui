import React from 'react';
import {
    Typography,
    Grid
  } from "@material-ui/core";
import useStyles from '../UserDetailsView.style';

function LabelValue({ label, value }) {
    const classes = useStyles();
    return (
        <Grid item className={classes.labelValueConatiner}>
            <Typography className={classes.label}>{label}</Typography>&nbsp;
            {value !== "undefined" && <Typography className={classes.value}>{value}</Typography>}
        </Grid>
    );
}

export default LabelValue;