import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  Modal,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PublishIcon from "@material-ui/icons/Publish";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import someImage from "../../../assets/images/ref1.png";
import LoadingProgress from "../../../components/LoadingProgress";
import { IMAGE_BASE_URL } from "../../../config/constants";
import {
  uploadAddharBack,
  uploadAddharFront,
  uploadPancard,
} from "../../../hooks/api/useFileUpload";
import { usePackagesList } from "../../../hooks/api/usePackageDetails";
import {
  invalidateUserDetails,
  updateKyc,
  useUserDetails,
} from "../../../hooks/api/useUserDetails";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import { setPackage } from "../../../redux/actions/packageActions";
import LabelValue from "../../shared/LabelValue";
import SucessModel from "../../shared/SucessModel";
import { urlParamsToApi } from "./urlParamsToApi";
import useStyles from "./UserDetailsView.style";
import { useUrlParams } from "./useUrlParams";
import {
  formatePageaDeatails,
  formateUserDetails,
  getformatedDate,
} from "./utilitizes/utils";

function UserDetailsView() {
  const title = "Details";
  const classes = useStyles();
  const [state, setState] = useState({
    panCard: false,
    addharCard: false,
    addharCardFrontImage: null,
    addharCardBackImage: null,
    panCardImage: null,
    sucess: false,
  });
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [prevImage, setPrevImage] = useState();
  const navigate = useNavigate();

  const { urlParams } = useUrlParams();
  const { userId } = useParams();
  const { status, userResponse, error } = useUserDetails(userId);
  const userDetailsNew = usePackagesList({
    params: urlParamsToApi(urlParams),
  });

  if (status === "loading") {
    return <LoadingProgress p={2} />;
  }

  const detailsData = formateUserDetails(userResponse);
  const packageDetails = formatePageaDeatails(userDetailsNew);

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
    updateKyc(userId).then(() => {
      navigate("/users");
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
    const res1 =
      state.panCardImage && uploadPancard(userId, state.panCardImage);
    const res2 =
      state.addharCardFrontImage &&
      uploadAddharFront(userId, state.addharCardFrontImage);
    const res3 =
      state.addharCardBackImage &&
      uploadAddharBack(userId, state.addharCardBackImage);
    if (res1 && !res1.error) {
      handleSuccess();
    } else if (res2 && !res2.error) {
      handleSuccess();
    } else if (res3 && !res3.error) {
      handleSuccess();
    }
    return setState({
      isUpdate: false,
    });
  };

  const handleSuccess = async () => {
    await invalidateUserDetails();
    closeSuccessPopup();
    enqueueSnackbar("Document Updated successfully", {
      variant: "success",
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
    navigate("/users");
    return null;
  }

  const onViewPackage = (packageDet) => {
    dispatch(setPackage(packageDet));
    navigate(`/users/${detailsData.idUser}/package`);
  };
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
              <Grid container>
                <Grid
                  item
                  container
                  className={classes.packageConatinerWrapper}
                >
                  <Typography variant="h4" className={classes.moreDetailsTitle}>
                    Packages:
                  </Typography>
                  <Grid container className={classes.packageCardWrapper}>
                    {packageDetails && packageDetails.length ? (
                      packageDetails.map((detials, i) => {
                        return (
                          <Card
                            key={i + "card"}
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
                                label={"Purchase Date:"}
                                value={getformatedDate(detials.purchaseDate)}
                              />
                              <LabelValue
                                label={"Expiry Date:"}
                                value={getformatedDate(detials.expiryDate)}
                              />
                              <LabelValue
                                label={"Total Price:"}
                                value={detials.totalPrice}
                              />
                              <Grid
                                container
                                className={classes.packageBottomContainer}
                              >
                                <Grid>
                                  <Typography
                                    className={classes.statusContainer}
                                  >
                                    <FiberManualRecordIcon
                                      className={
                                        detials.status === 1
                                          ? classes.Active
                                          : classes.InActive
                                      }
                                    />
                                    {detials.status === 1
                                      ? "Active"
                                      : "In-Active"}{" "}
                                  </Typography>
                                </Grid>
                                <Button
                                  className={classes.view}
                                  onClick={() => onViewPackage(detials)}
                                >
                                  View
                                </Button>
                              </Grid>
                            </CardContent>
                          </Card>
                        );
                      })
                    ) : (
                      <Grid
                        container
                        className={classes.packageCardWrapper}
                        style={{ "grid-template-columns": "1fr" }}
                      >
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
                            <Typography align={"center"}>
                              No Pacakage data
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    )}
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
                          image={getImageSrc(state.addharCardFrontImage)}
                          title="Addhar Card"
                          onClick={(event) =>
                            handleOpen(getImageSrc(state.addharCardFrontImage))
                          }
                        />
                      ) : (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageFromApi(detailsData.aadhaarFront)}
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
                          image={getImageSrc(state.addharCardBackImage)}
                          title="Addhar Card"
                          onClick={(event) =>
                            handleOpen(getImageSrc(state.addharCardBackImage))
                          }
                        />
                      ) : (
                        <CardMedia
                          className={classes.cardImage}
                          image={getImageFromApi(detailsData.aadhaarFront)}
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
                  <Grid item xs={12} sm={3} md={3}>
                    {detailsData.kycCompleted && (
                      <Button
                        onClick={() => setState({ sucess: true })}
                        className={classes.approveButton}
                        disabled={!state.addharCard}
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
}

export default UserDetailsView;
