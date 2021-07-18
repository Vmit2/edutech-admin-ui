import React from 'react';
import {
    Typography,
    Grid,
    makeStyles
  } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    labelValueConatiner: {
        display: "flex",
        marginBottom: "10px",
        paddingRight : '1rem',
      },
    label : {
        flexGrow : '30%',
        whiteSpace: 'nowrap',
    },
    value : {
        flexBasis : '70%',
    }  
}))

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