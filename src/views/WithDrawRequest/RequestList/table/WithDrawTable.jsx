import { Button } from "@material-ui/core";
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
import { useUserState } from "../../../../hooks/redux";
import { PAGE_SIZE_STEPS } from "../../../../utils/url/parsePage";

function UserTable({
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
  const { activeBusiness } = useUserState();
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
              <TableCell>Beneficiary Type</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Payment Mode</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Request</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!isLoading &&
              data &&
              data.map((user) => (
                <TableRow key={user.id_user}>
                  <TableCell>{user.first_name}</TableCell>
                  <TableCell>{user.gender === 1 ? "Male" : "Female"}</TableCell>
                  <TableCell>{user.phone_number}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell align="center">
                    <Button>Click to Approve</Button>
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

UserTable.propTypes = {
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

export default UserTable;
