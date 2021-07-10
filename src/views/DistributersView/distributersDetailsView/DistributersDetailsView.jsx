import React,{ useMemo, useRef, useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Checkbox,
  Modal,
  Button,
  Container, 
  Grid,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import FormInfoText from "../../../components/Typography/FormInfoText/FormInfoText";
import { useDistributerDetails } from "../../../hooks/api/useDistributerDetails";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import useStyles from "./DistributersDetailsView.style";
import PublishIcon from "@material-ui/icons/Publish";
import CloseIcon from "@material-ui/icons/Close";
import LabelValue from "../../shared/LabelValue";
import userImg from "../../../assets/images/userImg.png";
import someImage from "../../../assets/images/ref1.png";
import { formateDistributerDetails,getformatedDate } from "./utilitizes/utils";

const DistributersDetailsView = ({ ...props }) => {
  const title = "Distributers";
  const classes = useStyles();
  const { distributerId } = useParams();
  const distributerDetails = useDistributerDetails(distributerId);
  const detailsData = formateDistributerDetails(distributerDetails);

  const [state, setState] = useState({
    panCard: false,
    addharCard: false,
  });
  const [open, setOpen] = useState(false);
  const [prevImage, setPrevImage] = useState();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleOpen = (prevImage) => {
    setPrevImage(prevImage);
    return setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const onSubmitKyc = () => {
    // updateKyc(userId);
  };
  if(!detailsData){
    return 
  }

  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        <Container className={classes.detailsContainer} spacing={2}>
          <Grid container>
            <Grid item className={classes.profileConatiner}>
              <Grid item className={classes.imageContainer}>
                <img
                  className={classes.imgStyle}
                  height="100"
                  width="100"
                  src={userImg}
                />
                <Typography variant="h5" className={classes.fullName}>
                {detailsData.salutation && detailsData.salutation+"."}{detailsData.firstName && detailsData.firstName}&nbsp;{detailsData.lastName && detailsData.lastName}

                </Typography>
              </Grid>
              <Grid item className={classes.basicDetailsContainer}>
                <Typography variant="h4" className={classes.basicDetailsTitle}>
                  Basic Details:
                </Typography>
                <Grid container>
                  <Grid container item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="First Name:"
                      value={detailsData.firstName}
                    />
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Middle Name:"
                      value={detailsData.middleName}
                    />
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Last Name:"
                      value={detailsData.lastName}
                    />
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Email:"
                      value={detailsData.email}
                    />
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6}>
                    <LabelValue label="Gender:" value={detailsData.gender} />
                  </Grid>
                  <Grid container item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Date of Birth : "
                      value={getformatedDate(detailsData.dateOfBirth)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.moreDetailsConatiner}>
              <Grid item container>
                <Typography variant="h4" className={classes.moreDetailsTitle}>
                  More Details:
                </Typography>
                <Grid container>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Billing Address:"
                      value={detailsData.billingAddress}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Shipping Address:"
                      value={detailsData.shippingAddress}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Aadhaar Card:"
                      value={detailsData.aadhaarCard}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue label="Pancard:" value={detailsData.panCard} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container className={classes.kycDetailsConatiner}>
              <Typography variant="h4" className={classes.moreDetailsTitle}>
                  Attachments:
                </Typography>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.cardWrapper}
                  >
                    <Card className={classes.cardImageConatiner}>
                      <CardMedia
                        className={classes.cardImage}
                        image={someImage}
                        title="PanCard"
                        onClick={(event) => handleOpen(someImage)}
                      />
                    </Card>
                    <CardContent className={classes.overlayContainer}>
                      <div>
                        <input
                          accept="image/*"
                          className={classes.input}
                          style={{ display: "none" }}
                          id="raised-button-file"
                          type="file"
                        />
                        <label htmlFor="raised-button-file">
                          <Button
                            variant="raised"
                            component="span"
                            className={classes.button}
                          >
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      {detailsData.kycCompleted && <Checkbox
                        name={"panCard"}
                        className={classes.checkboxStyle}
                        checked={state.panCard}
                        onChange={handleChange}
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                      />}
                    </CardContent>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.cardWrapper}
                  >
                    <Card className={classes.cardImageConatiner}>
                      <CardMedia
                        className={classes.cardImage}
                        image={userImg}
                        title="Addhar Card"
                        onClick={(event) => handleOpen(userImg)}
                      />
                    </Card>
                    <CardContent className={classes.overlayContainer}>
                      <div>
                        <input
                          accept="image/*"
                          className={classes.input}
                          style={{ display: "none" }}
                          id="raised-button-file"
                          type="file"
                        />
                        <label htmlFor="raised-button-file">
                          <Button
                            variant="raised"
                            component="span"
                            className={classes.button}
                          >
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      {detailsData.kycCompleted && <Checkbox
                        name={"addharCard"}
                        checked={state.addharCard}
                        onChange={handleChange}
                        className={classes.checkboxStyle}
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                      />}
                    </CardContent>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.cardWrapper}
                  >
                    <Card className={classes.cardImageConatiner}>
                      <CardMedia
                        className={classes.cardImage}
                        image={userImg}
                        title="Addhar Card"
                        onClick={(event) => handleOpen(userImg)}
                      />
                    </Card>
                    <CardContent className={classes.overlayContainer}>
                      <div>
                        <input
                          accept="image/*"
                          className={classes.input}
                          style={{ display: "none" }}
                          id="raised-button-file"
                          type="file"
                        />
                        <label htmlFor="raised-button-file">
                          <Button
                            variant="raised"
                            component="span"
                            className={classes.button}
                          >
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      {detailsData.kycCompleted && <Checkbox
                        name={"addharCard"}
                        checked={state.addharCard}
                        onChange={handleChange}
                        className={classes.checkboxStyle}
                        inputProps={{
                          "aria-label": "checkbox with default color",
                        }}
                      />}
                    </CardContent>
                  </Grid>
                </Grid>
                <Button onClick={onSubmitKyc} className={classes.approveButton} disabled={!state.panCard}>
                  Click to Approve
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            open={open}
            className={classes.modal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Grid container className={classes.previewImageWrapper}>
              <Grid
                item
                className={classes.closeConatiner}
                onClick={handleClose}
              >
                <CloseIcon className={classes.closeIcon} />
              </Grid>
              <Grid container className={classes.previewImage}>
                <img height="50%" width="50%" src={prevImage} />
              </Grid>
            </Grid>
          </Modal>
        </Container>
      </DashboardPage>
    </div>
  );
};

export default DistributersDetailsView;
