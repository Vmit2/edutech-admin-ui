import { Button, makeStyles } from "@material-ui/core";
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
import { useState } from "react";
import TertiaryButton from "../../../../components/Buttons/TertiaryButton";
import LoadingProgress from "../../../../components/LoadingProgress";
import { useUserState } from "../../../../hooks/redux";
import { PAGE_SIZE_STEPS } from "../../../../utils/url/parsePage";
import SucessModel from "../../../shared/SucessModel";

const useStyles = makeStyles((theme) => ({
  approveButton: {
    background: theme.palette.common.white,
    color: theme.palette.common.backgroundLight,
    border:"solid 1px",
    borderColor:theme.palette.common.backgroundLight,
    height: "2.5rem",
    "&:hover": {
      background: theme.palette.button.tertiaryHover,
    },
  },
}));

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

  const [state, setState] = useState({ sucess: false });
  const handlePageSizeChange = (event) => {
    onPageChange(1, event.target.value);
  };

  const classes = useStyles();

  const onApproveRequest = () => {};

  const closeSuccessPopup = () => {
    setState({
      sucess: false,
    });
  };

  return (
    <>
      <Box minWidth={700}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>Name</TableSortLabel>
              </TableCell>
              <TableCell>Beneficiary Type</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Payment Mode</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align="center">Request</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!isLoading &&
              data &&
              data.map((user) => (
                <TableRow key={user.id_user}>
                  <TableCell>{user.beneficiary_name}</TableCell>
                  <TableCell>{user.beneficiary_type}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.payment_mode}</TableCell>
                  <TableCell>{user.amount}</TableCell>
                  <TableCell align="center">
                    <TertiaryButton
                      className={classes.approveButton}
                      onClick={() => setState({ sucess: true })}
                    >
                      Approve
                    </TertiaryButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {isLoading && <LoadingProgress p={2} />}
      </Box>
      <SucessModel
        open={state.sucess}
        content={"You are sure you want to approve withdraw request."}
        onSubmit={onApproveRequest}
        handleClose={closeSuccessPopup}
      />
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
