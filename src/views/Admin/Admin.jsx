import React from "react";
import { useParams } from "react-router";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import Checkboxes from "../../components/CheckBox/CheckBox";
import RadioButtonsGroup from "../../components/Radio/Radio";
const Item = () => {
  const { name } = useParams();
  // const {radio}=[value="Male",radioLabel="Male"]
  return (
    <div>
      <h2>Checkboxe's</h2>
      <Checkboxes label="Primary CheckBox" checked={true} name="CheckBox1" color="Primary"/>
      <Checkboxes label="Secondary CheckBox" checked={true}  name="CheckBox2" color="Secondary"/>

      
      <br />
      <h2>Radio Button's</h2>
      <RadioButtonsGroup radioLabel="Male" value="Male" />
      <RadioButtonsGroup radioLabel="Female" value="Female" />
      {/* <RadioButtonsGroup radio={radio} selected="Male"/> */}
      <h3>requested name his.. {name}</h3>
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
