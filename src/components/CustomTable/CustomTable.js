import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableContainer, TableHead, TableRow, Paper, Table, TableCell, FormControlLabel, Switch } from '@material-ui/core';
import { useState } from 'react';

const CustomTable = ({ tableData, headingColumns, switchLabel, }) => {
    const [dense, setDense] = useState(false);
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
                {/* <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}
            </TableContainer>
            {/* <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label={switchLabel}
            /> */}
        </div>
    );
}

CustomTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    switchLabel: PropTypes.string.isRequired,
}

export default CustomTable;