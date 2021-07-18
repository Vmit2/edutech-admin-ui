import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  Link,
  Modal,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PublishIcon from "@material-ui/icons/Publish";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import someImage from "../../../assets/images/ref1.png";
import LoadingProgress from "../../../components/LoadingProgress";
import TertiaryLinkText from "../../../components/Typography/TertiaryLinkText";
import { IMAGE_BASE_URL } from "../../../config/constants";
import { useDistributerDetails } from "../../../hooks/api/useDistributerDetails";
import { updateKyc } from "../../../hooks/api/useDistributers";
import {
  uploadAddharBack,
  uploadAddharFront,
  uploadPancard
} from "../../../hooks/api/useFileUpload";
import { useWalletList } from "../../../hooks/api/useWalletDetails";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import LabelValue from "../../shared/LabelValue";
import SucessModel from "../../shared/SucessModel";
import { useUrlParams } from "../../UsersView/userDetails/useUrlParams";
import useStyles from "./DistributersDetailsView.style";
import {
  formateDistributerDetails,
  formateWalletDetails,
  getformatedDate
} from "./utilitizes/utils";

const DistributersDetailsView = ({ ...props }) => {
  const title = "Distributers";
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [prevImage, setPrevImage] = useState();
  const { distributerId } = useParams();
  const { urlParams } = useUrlParams();

  const walletDetailsApi = useWalletList({
    params: { id: distributerId },
  });
  const walletDetails = walletDetailsApi
    ? formateWalletDetails(walletDetailsApi)
    : null;
  const navigate = useNavigate();
  const [state, setState] = useState({
    panCard: false,
    addharCard: false,
    addharCardFrontImage: null,
    addharCardBackImage: null,
    panCardImage: null,
    sucess: false,
  });
  const { status, distResponse, error } = useDistributerDetails(distributerId);
  if (status === "loading") {
    return <LoadingProgress p={2} />;
  }
  const detailsData = formateDistributerDetails(distResponse);

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
    updateKyc(distributerId).then(() => {
      navigate("/distributers");
    });
  };

  const uploadImage = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.files[0],
      isUpdate: true,
    });
  };

  const onUpdate = () => {
    state.panCardImage && uploadPancard(distributerId, state.panCardImage);
    state.addharCardFrontImage &&
      uploadAddharFront(distributerId, state.addharCardFrontImage);
    state.addharCardBackImage &&
      uploadAddharBack(distributerId, state.addharCardBackImage);
    return setState({
      isUpdate: false,
    });
  };

  const getImageSrc = (image) => {
    if (image) {
      return URL.createObjectURL(image);
    } else {
      return someImage;
    }
  };

  const getImageFromApi = (image) => {
    if (image) {
      return IMAGE_BASE_URL + image;
    } else {
      return someImage;
    }
  };

  const closeSuccessPopup = () => {
    setState({
      sucess: false,
    });
  };

  if (!detailsData) {
    navigate("/distributers");
    return null;
  }

  return (
    <div className="">
      <DashboardPage documentTitle={title} pageTitle={title}>
        {status === "loading" && <LoadingProgress p={2} />}
        <Container className={classes.detailsContainer} spacing={2}>
          <Grid container>
            <Grid item className={classes.profileConatiner}>
              <Grid item className={classes.imageContainer}>
                <img
                  className={classes.imgStyle}
                  height="100"
                  width="100"
                  src={getImageFromApi(detailsData.photo)}
                />
                <Typography variant="h5" className={classes.fullName}>
                  {detailsData.salutation && detailsData.salutation + "."}
                  {detailsData.firstName && detailsData.firstName}&nbsp;
                  {detailsData.lastName && detailsData.lastName}
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
                    <LabelValue label="Email:" value={detailsData.email} />
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
              <Grid item style={{ alignSelf: "flex-end" }}>
                <Link
                  component={RouterLink}
                  to={`/users/${detailsData.idUser}`}
                  underline="none"
                >
                  <TertiaryLinkText value="View As User ..." />
                </Link>
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
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue
                      label="Referral code:"
                      value={detailsData.code}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  container
                  className={classes.packageConatinerWrapper}
                >
                  <Typography variant="h4" className={classes.moreDetailsTitle}>
                    Wallet:
                  </Typography>
                  {walletDetails ? (
                    <Grid container className={classes.packageCardWrapper}>
                      <Card
                        xs={12}
                        sm={3}
                        md={3}
                        className={classes.packageCard}
                      >
                        <CardContent
                          item
                          className={classes.packageCardContent}
                        >
                          <LabelValue
                            label={"Wallet Amount:"}
                            value={
                              walletDetails.walletAmount
                                ? walletDetails.walletAmount
                                : ""
                            }
                          />
                          <LabelValue
                            label={"Total Earning:"}
                            value={
                              walletDetails.totalEarning
                                ? walletDetails.totalEarning
                                : ""
                            }
                          />
                          <LabelValue
                            label={"Immediate Referral Count:"}
                            value={
                              walletDetails.immediateReferralCount
                                ? walletDetails.immediateReferralCount
                                : ""
                            }
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  ) :
                  <Grid container className={classes.packageCardWrapper}>
                      <Card
                        xs={12}
                        sm={3}
                        md={3}
                        className={classes.packageCard}
                      >
                        <CardContent
                          item
                          className={classes.packageCardContent}
                        >
                          <Typography align={'center'}>No wallet data</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  }
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
                      {state.panCardImage ? (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageSrc(state.panCardImage)}
                          title="PanCard"
                          onClick={(event) =>
                            handleOpen(getImageSrc(state.panCardImage))
                          }
                        />
                      ) : (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageFromApi(detailsData.pancardPhoto)}
                          title="PanCard"
                          onClick={(event) =>
                            handleOpen(
                              getImageFromApi(detailsData.pancardPhoto)
                            )
                          }
                        />
                      )}
                    </Card>
                    <CardContent className={classes.overlayContainer}>
                      <div>
                        <input
                          accept="image/*"
                          className={classes.input}
                          name="panCardImage"
                          onChange={uploadImage}
                          style={{ display: "none" }}
                          id="raised-button-file"
                          type="file"
                        />
                        <label name="panCardImage" htmlFor="raised-button-file">
                          <Button
                            variant="raised"
                            component="span"
                            className={classes.button}
                          >
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      {detailsData.kycCompleted && (
                        <Checkbox
                          name={"panCard"}
                          className={classes.checkboxStyle}
                          checked={state.panCard}
                          onChange={handleChange}
                          inputProps={{
                            "aria-label": "checkbox with default color",
                          }}
                        />
                      )}
                    </CardContent>
                    <label>Pan card</label>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.cardWrapper}
                  >
                    <Card className={classes.cardImageConatiner}>
                      {state.addharCardFrontImage ? (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageSrc(state.addharCardFrontImage)} //{userImg}
                          title="Addhar Card"
                          onClick={(event) =>
                            handleOpen(getImageSrc(state.addharCardFrontImage))
                          }
                        />
                      ) : (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageFromApi(detailsData.aadhaarFront)} //{userImg}
                          title="Addhar Card"
                          onClick={(event) =>
                            handleOpen(
                              getImageFromApi(detailsData.aadhaarFront)
                            )
                          }
                        />
                      )}
                    </Card>
                    <CardContent className={classes.overlayContainer}>
                      <div>
                        <input
                          accept="image/*"
                          name="addharCardFrontImage"
                          onChange={uploadImage}
                          className={classes.input}
                          style={{ display: "none" }}
                          id="raised-button-file-addhar-front"
                          type="file"
                        />
                        <label htmlFor="raised-button-file-addhar-front">
                          <Button
                            variant="raised"
                            component="span"
                            className={classes.button}
                          >
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      {detailsData.kycCompleted && (
                        <Checkbox
                          name={"addharCard"}
                          checked={state.addharCard}
                          onChange={handleChange}
                          className={classes.checkboxStyle}
                          inputProps={{
                            "aria-label": "checkbox with default color",
                          }}
                        />
                      )}
                    </CardContent>
                    <label>Addhar Front Image</label>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.cardWrapper}
                  >
                    <Card className={classes.cardImageConatiner}>
                      {state.addharCardBackImage ? (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageSrc(state.addharCardBackImage)} //{userImg}
                          title="Addhar Card"
                          onClick={(event) =>
                            handleOpen(getImageSrc(state.addharCardBackImage))
                          }
                        />
                      ) : (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageFromApi(detailsData.aadhaarFront)} //{userImg}
                          title="Addhar Card"
                          onClick={(event) =>
                            handleOpen(
                              getImageFromApi(detailsData.aadhaarFront)
                            )
                          }
                        />
                      )}
                    </Card>
                    <CardContent className={classes.overlayContainer}>
                      <div>
                        <input
                          accept="image/*"
                          className={classes.input}
                          name="addharCardBackImage"
                          onChange={uploadImage}
                          style={{ display: "none" }}
                          id="raised-button-file-addhar-back"
                          type="file"
                        />
                        <label htmlFor="raised-button-file-addhar-back">
                          <Button
                            variant="raised"
                            component="span"
                            className={classes.button}
                          >
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      {detailsData.kycCompleted && (
                        <Checkbox
                          name={"addharCard"}
                          checked={state.addharCard}
                          onChange={handleChange}
                          className={classes.checkboxStyle}
                          inputProps={{
                            "aria-label": "checkbox with default color",
                          }}
                        />
                      )}
                    </CardContent>
                    <label>Addhar Back Image</label>
                  </Grid>
                </Grid>
                <Grid container className={classes.buttonContainer}>
                  <Grid items xs={12} sm={3} md={3}>
                    <Button
                      onClick={onUpdate}
                      className={classes.updateButton}
                      disabled={!state.isUpdate}
                    >
                      Update Documents
                    </Button>
                  </Grid>
                  <Grid items xs={12} sm={3} md={3}>
                    {detailsData.kycCompleted && (
                      <Button
                        onClick={() => setState({ sucess: true })}
                        className={classes.approveButton}
                        disabled={!state.panCard}
                      >
                        Click to Approve
                      </Button>
                    )}
                  </Grid>
                </Grid>
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
          <SucessModel
            open={state.sucess}
            content={"You are sure you want to approve KYC"}
            onSubmit={onSubmitKyc}
            handleClose={closeSuccessPopup}
          />
        </Container>
      </DashboardPage>
    </div>
  );
};

export default DistributersDetailsView;
