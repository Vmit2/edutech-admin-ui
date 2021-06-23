import React from "react";
import { useParams } from "react-router";
import CustomTable from "../../components/CustomTable/CustomTable";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
const userData = [
  {
    salutation: 'Ms',
    name: 'Swapna',
    phone: 123445678,
    refCode: '123sdfghj',
  },
  {
    salutation: 'Mr',
    name: 'Aniket',
    phone: 789456,
    refCode: 'Finland456',
  },
  {
    salutation: 'Mr',
    name: 'Vimit',
    phone: 85296374,
    refCode: 'Germany7888889',
  },
  {
    salutation: 'Mr',
    name: 'Charles',
    phone: 147852852,
    refCode: 'Monaco74123',
  },]
const Item = () => {
  const { name } = useParams();
  return (
    <div>
<<<<<<< HEAD
      <h3>requested name is -

        <CustomTable
          tableData={userData}
          headingColumns={['Salutation', 'Name', 'Phone', 'Ref Code']}
          switchLabel='label'
        />
      </h3>
=======
      <h3>requested name is {name}</h3>
>>>>>>> fd9ede2b0db427bb201c586aa0dbe41f249f120d
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
