import { Card, Container, makeStyles } from "@material-ui/core";
import React from "react";
import FormInfoText from "../../components/Typography/FormInfoText/FormInfoText";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    border: "solid 1px",
    borderRadius: "14px",
    borderColor: theme.palette.module.border,
  },
}));
const UserDetailsView = ({ ...props }) => {
  const title = "Details";
  const classes = useStyles();
  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <Container class={classes.detailsContainer}>
          <Card
            //className={classes.root}
            variant="outlined"
          >
            <FormInfoText>
                some details
            </FormInfoText>
          </Card>
        </Container>
      </DashboardPage>
    </div>
  );
};

export default UserDetailsView;
