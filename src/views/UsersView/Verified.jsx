import React from "react";
import { TertiaryButton } from "../../components/Buttons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { formatUsersDetails } from "./formatUsersDetails";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const Verified = ({ completeData,...rest }) => {
  const { data, count, currentPage } = completeData;
  return (
    <div className="">
      <CustomTable
        tableData={formatUsersDetails(data, (user) => {
          return (
            <Link component={RouterLink} to="details" underline="none">
              <TertiaryButton onClick={() => {}} size="small">
                View Details
              </TertiaryButton>
            </Link>
          );
        })}
        headingColumns={["Name", "Gender", "Mobile Number", "Email", " "]}
        currentPage={currentPage}
        count={count}
        {...rest}
      />
    </div>
  );
};

export default Verified;
