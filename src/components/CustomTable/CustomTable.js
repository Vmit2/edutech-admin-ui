import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableContainer, TableHead, TableRow, Paper, Table, TableCell } from '@material-ui/core';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
import CustomToggleButton from '../CustomToggleButton/CustomToggleButton';
import { Grid } from '@material-ui/core';

const CustomTable = ({ tableData, headingColumns }) => {
    const [dense, setDense] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Item1')
    const handleChange = (e, value) => {
        if (value) {
            setSelectedItem(value);
        }
    }
    const data = tableData.map((row, index) => {
        let rowData = [];
        let i = 0;

        for (const key in row) {
            rowData.push({
                key: headingColumns[i],
                val: row[key]
            });
            i++;
        }

        return <TableRow key={index}>
            {rowData.map((data, index) => <TableCell key={index} data-heading={data.key}>{data.val}</TableCell>)}
        </TableRow>
    });
    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            {headingColumns.map((col, index) => (
                                <TableCell component="th" scope="row" align="left" key={index}>{col}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody align="center">
                        {data}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={4}>
                    <CustomSwitch
                        switchLabel='label'
                        dense={dense}
                        handleChangeDense={handleChangeDense}
                    />
                </Grid>
                <Grid item xs={8}>
                    <CustomToggleButton
                        handleChange={handleChange}
                        selectedItem={selectedItem}
                        btnOne='Item1'
                        btnTwo='Item2'
                    />
                    {selectedItem === 'Item1' ? <h1> Item1 </h1> : <h1>Item2</h1>}
                </Grid>
            </Grid>


        </div>
    );
}

CustomTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    switchLabel: PropTypes.string.isRequired,
}

export default CustomTable;