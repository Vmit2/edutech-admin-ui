import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import userImg from "../../assets/images/userImg.png";
import KeyValueContent from "../../components/KeyValueContent/KeyValueContent";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";

const useStyles = makeStyles((theme) => ({
  detailsContainer: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    border: "solid 2px",
    borderRadius: "14px",
    borderColor: theme.palette.module.border,
    padding: 20,
  },
  imgStyle: {
    height: 200,
    width: 200,
    borderRadius: "14px",
    borderColor: theme.palette.module.border,
    backgroundColor: theme.palette.common.green,
  },
}));
const UserDetailsView = ({ ...props }) => {
  const title = "Details";
  const classes = useStyles();
  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <Container className={classes.detailsContainer} spacing={2}>
          <Grid container>
            <Grid item xs={4} sm={12} md={4}>
              <img
                className={classes.imgStyle}
                height="100"
                width="100"
                src={userImg}
              />
            </Grid>
            <Grid item xs={8} sm={12} md={8} container>
              <Grid item xs={8} sm={12} md={8}>
                <KeyValueContent label="Name:" value="Mr.Vikas Kumar Gupta" />
              </Grid>
              <Grid item xs={6} sm={12} md={6}>
                <KeyValueContent label="Gender:" value="something" />
              </Grid>
              <Grid item xs={6} sm={12} md={6}>
                <KeyValueContent label="DOB:" value="something" />
              </Grid>
              <Grid item xs={6} sm={12} md={6}>
                <KeyValueContent label="Address:" value="something" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </DashboardPage>
    </div>
  );
};

export default UserDetailsView;
