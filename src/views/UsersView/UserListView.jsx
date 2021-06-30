import React from "react";
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
