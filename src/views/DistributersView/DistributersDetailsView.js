import { Card, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import FormInfoText from "../../components/Typography/FormInfoText/FormInfoText";
import { useDistributerDetails } from "../../hooks/api/useDistributerDetails";
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
const DistributersDetailsView = ({ ...props }) => {
  const title = "Distributers";
  const classes = useStyles();
  const { distributerId } = useParams();
  const distributerDetails = useDistributerDetails(distributerId);

  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <Container class={classes.detailsContainer}>
          <Card
            //className={classes.root}
            variant="outlined"
          >
            <FormInfoText>
                Distributers details
            </FormInfoText>
          </Card>
        </Container>
      </DashboardPage>
    </div>
  );
};

export default DistributersDetailsView;
