import { Link } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { TertiaryButton } from "../../components/Buttons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { formatUsersDetails } from "./formatUsersDetails";

const NonVerified = ({ users }) => {
  return (
    <div className="">
      <CustomTable
        tableData={formatUsersDetails(users, (user) => {
          return (
            <Link component={RouterLink} to="details" underline="none">
              <TertiaryButton
                onClick={() => {
                }}
                size="small"
              >
                View Details
              </TertiaryButton>
            </Link>
          );
        })}
        headingColumns={["Name", "Email", "Referral Code"]}
      />
    </div>
  );
};

export default NonVerified;
