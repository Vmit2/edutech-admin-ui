import React from "react";
import { TertiaryButton } from "../../components/Buttons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { formatUsersDetails } from "./formatUsersDetails";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const Verified = ({ users }) => {
  return (
    <div className="">
      <CustomTable
        tableData={formatUsersDetails(users, (user) => {
          return (
            <Link component={RouterLink} to="details" underline="none">
              <TertiaryButton
                onClick={() => {
                  console.log("clicked a user ", user);
                }}
                size="small"
              >
                View Details
              </TertiaryButton>
            </Link>
          );
        })}
        headingColumns={["Name", "Email", "Referral Code", " "]}
      />
    </div>
  );
};

export default Verified;
