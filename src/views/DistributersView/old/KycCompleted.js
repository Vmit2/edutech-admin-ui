import React from "react";
import { TertiaryButton } from "../../components/Buttons";
import CustomTable from "../../components/CustomTable/CustomTable";
import { formatKycDetails } from "./formatKycDetails";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const KycCompleted = ({ users }) => {
  return (
    <div className="">
      <CustomTable
        tableData={formatKycDetails(users, (user) => {
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
        headingColumns={["Name", "Email", "Referral Code", " "]}
      />
    </div>
  );
};

export default KycCompleted;
