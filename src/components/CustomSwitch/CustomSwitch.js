import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {FormControlLabel, Switch } from '@material-ui/core';
function CustomSwitch(props) {
    const {switchLabel, dense, handleChangeDense } = props;
    return (
        <div>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label={switchLabel}
            />
        </div>
    );
}

CustomSwitch.propTypes = {
    switchLabel: PropTypes.string.isRequired,
}
export default CustomSwitch;