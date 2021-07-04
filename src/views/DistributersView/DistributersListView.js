import React from "react";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import TabPanelComponent from "../../components/Tabs/TabPanelComponent";
import { useUsers } from "../../hooks/api/useUsers";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import KycCompleted from "./KycCompleted";
import KycPartiallyCompleted from "./KycPartiallyCompleted";

const DistributersListView = ({ ...props }) => {
  const title = "Distributers";

  const response = useUsers();
  const users = response.data;
  const isLoading = response.status === "loading";

  return (
    <DashboardPage documentTitle={title} pageTitle={title}>
      {isLoading && <LoadingProgress />}
      <TabPanelComponent
        tabData={[
          { title: "KYC Completed", item: <KycCompleted users={users} /> },
          { title: "KYC Partially Completed", item: <KycPartiallyCompleted users={users} /> },
        ]}
      />
    </DashboardPage>
  );
};

export default DistributersListView;
