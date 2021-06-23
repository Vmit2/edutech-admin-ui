import React from "react";
import { useParams } from "react-router";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";

const Item = () => {
  const { name } = useParams();
  return (
    <div>
      <h3>requested name is {name}</h3>
    </div>
  );
};
const Admin = ({ ...props }) => {
  const title = 'Admin'
  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <Item />
      </DashboardPage>
    </div>
  );
};

export default Admin;
