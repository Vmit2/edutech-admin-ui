import React from "react";
import { useParams } from "react-router";
import TabPanelComponent from "../../components/Tabs/TabPanelComponent";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
const Item = () => {
  const { name } = useParams();
  return <div>Hi these is tab view</div>;
};
const Admin = ({ ...props }) => {
  const title = "Admin";
  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <TabPanelComponent
          tabData={[
            { title: "KYC Approved", item: <Item/> },
            { title: "KYC Rejected", item: <Item/> },
          ]}
        />
      </DashboardPage>
    </div>
  );
};

export default Admin;
