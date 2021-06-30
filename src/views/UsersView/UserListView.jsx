<<<<<<< HEAD
import { Link } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PrimaryButton } from "../../components/Buttons";
import PlusCircleIcon from "../../components/Icons/PlusCircleIcon";
import ListSummaryBar from "../../components/ListSummaryBar/ListSummaryBar";
=======
import React from "react";
>>>>>>> 0f85d4f1595688d7edd61c14720ec663c6d4e78d
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import TabPanelComponent from "../../components/Tabs/TabPanelComponent";
import { useUsers } from "../../hooks/api/useUsers";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import NonVerified from "./NonVerified";
import Verified from "./Verified";

const UserListView = ({ ...props }) => {
  const title = "Users";

  const response = useUsers();
  const users = response.data;
  const isLoading = response.status === "loading";

  return (
    <DashboardPage documentTitle={title} pageTitle={title}>
<<<<<<< HEAD
      <ListSummaryBar
        action={
          // hasWritePermission ? (
          <Link component={RouterLink} to="add" underline="none">
            <PrimaryButton component="div" startIcon={<PlusCircleIcon />}>
              Add New User
            </PrimaryButton>
          </Link>
          // ) : null
        }
        // count={users.data && users.data.length}
        // totalCount={users.count}
      />

=======
>>>>>>> 0f85d4f1595688d7edd61c14720ec663c6d4e78d
      {isLoading && <LoadingProgress />}
      <TabPanelComponent
        tabData={[
          { title: "Verified Users", item: <Verified users={users} /> },
          { title: "Non Verified Users", item: <NonVerified users={users} /> },
        ]}
      />
    </DashboardPage>
  );
};

export default UserListView;
