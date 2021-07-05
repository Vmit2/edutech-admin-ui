import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

const CustomTable = ({
  tableData,
  headingColumns,
  count,
  currentPage,
  setUrlParam,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(parseInt(currentPage));
    setUrlParam("limit",event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setUrlParam("page",newPage);
  };
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
        {/* <Pagination count={10}/> */}
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          // count={count && parseInt(count)}
          count="100"
          rowsPerPage={rowsPerPage}
          page={page && parseInt(page)}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

CustomTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomTable;
