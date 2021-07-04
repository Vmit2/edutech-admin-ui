import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    
} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";

const CustomTable = ({ tableData, headingColumns }) => {
  const data = tableData.map((row, index) => {
    let rowData = [];
    let i = 0;

    for (const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key],
      });
      i++;
    }

    return (
      <TableRow key={index}>
        {rowData.map((data, index) => (
          <TableCell key={index} data-heading={data.key}>
            {data.val}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headingColumns.map((col, index) => (
                <TableCell component="th" scope="row" align="left" key={index}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody align="center">{data}</TableBody>
        </Table>
        <Pagination count={10}/>
      </TableContainer>
    </div>
  );
};

CustomTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomTable;
