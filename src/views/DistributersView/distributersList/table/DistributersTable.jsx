import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import React from "react";
import LoadingProgress from "../../../../components/LoadingProgress";
import { PAGE_SIZE_STEPS } from "../../../../utils/url/parsePage";
import DistributersActionMenu from "./DistributersActionMenu";

function DistributersTable({
  isLoading,
  data,
  page,
  pageSize,
  count,
  // sort,
  // sortDirection,
  onPageChange,
  // onSortChange,
}) {
  const handlePageChange = (_, newPage) => {
    // Material-UI pages are 0 based.
    onPageChange(newPage + 1, pageSize);
  };

  const handlePageSizeChange = (event) => {
    onPageChange(1, event.target.value);
  };

  return (
    <>
      <Box minWidth={700}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
              // sortDirection={brandSortState.direction}
              >
                <TableSortLabel
                // active={brandSortState.isActive}
                // direction={brandSortState.direction}
                // onClick={() => handleSortChange(EquipmentSorts.BRAND_MODEL)}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!isLoading &&
              data &&
              data.map((distributer) => (
                <TableRow key={distributer.id_user}>
                  <TableCell>{distributer.first_name}</TableCell>
                  <TableCell>{distributer.gender === 1 ? "Male" : "Female"}</TableCell>
                  <TableCell>{distributer.phone_number}</TableCell>
                  <TableCell>{distributer.email}</TableCell>
                  <TableCell align="center">
                    <DistributersActionMenu
                      distributer={distributer}
                      hasWritePermission={true}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {isLoading && <LoadingProgress p={2} />}
      </Box>

      {!isLoading && (
        <TablePagination
          component="div"
          count={count}
          page={page - 1}
          rowsPerPage={pageSize}
          rowsPerPageOptions={PAGE_SIZE_STEPS}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePageSizeChange}
        />
      )}
    </>
  );
}

DistributersTable.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  count: PropTypes.number,
  sort: PropTypes.string,
  sortDirection: PropTypes.string,
  onPageChange: PropTypes.func,
  onSortChange: PropTypes.func,
};

export default DistributersTable;
