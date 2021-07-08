import { Typography, Card, CardMedia, CardContent, Checkbox, Modal, Button } from "@material-ui/core";
import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import userImg from "../../assets/images/userImg.png";
import someImage from "../../assets/images/ref1.png"
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import PublishIcon from '@material-ui/icons/Publish';
import CloseIcon from '@material-ui/icons/Close';
import { unset } from "lodash";

const useStyles = makeStyles((theme) => ({
  profileConatiner: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.module.backgroundLight,
    flexDirection: 'column',
    width: "100%",
    boxShadow: theme.palette.shadow.primary,
    padding: "20px 40px 8rem",
    marginBottom: '2rem',
    borderRadius: "10px 10px 10px 10px",
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: "-5rem",
    position: 'relative',
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    marginTop: '10px'
  },
  basicDetailsContainer: {
    position: 'relative',
    marginTop: "10px",
    color: theme.palette.common.white,
  },
  basicDetailsTitle: {
    color: theme.palette.common.white,
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    padding: 0,
  },
  imgStyle: {
    height: 110,
    width: 110,
    borderRadius: "50%",
    borderColor: theme.palette.common.white,
    border: '10px solid',
    backgroundColor: theme.palette.common.green,
  },
  moreDetailsConatiner: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    flexDirection: 'column',
    width: "98%",
    boxShadow: theme.palette.shadow.primary,
    padding: "20px 40px 20px",
    margin: '-8rem auto 0',
    borderRadius: "10px 10px 10px 10px",
  },
  moreDetailsTitle: {
    color: theme.palette.common.black,
    marginBottom: 10,
  },
  labelValueConatiner: {
    display: 'flex',
    marginBottom: '10px',
  },
  label: {
    fontWeight: "600",
  },
  value: {
    fontWeight: "200",
  },
  cardWrapper: {
    position: 'relative',
  },
  cardImageConatiner: {
    width: "200px",
    height: "150px",
    marginBottom: "10px",
    position: 'relative',
  },
  cardImage: {
    position: "relative",
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "200px",
      height: "150px",
      background: "#00000069"
    }
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
    padding: '5px 20px',
    color: '#FFF',
    background: "#FFFFFF47",
  },
  kycDetailsConatiner: {
    marginTop: "30px",
  },
  approveButton: {
    marginTop: "30px",
    background: theme.palette.module.backgroundLight,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.module.backgroundLight,
    }
  },
  checkboxStyle: {
    padding: 'unset',
  },
  button: {
    color: '#fff',
  },
  previewImageWrapper:{
    justifyContent: "center",
    flexDirection: "column",
    padding: "3rem",
  },
  previewImage: {
    justifyContent: "center",
  },
  closeConatiner : {
    alignSelf : 'flex-end',
    cursor : 'pointer'
  },
  closeIcon : {
    fontSize : "40px",
    color : theme.palette.common.white
  },
  modal : {
    height : '100vh'
  }
}));

const detailsData = {
  "idUser": 26,
  "salutation": "Mr",
  "firstName": "Test",
  "middleName": "Demo",
  "lastName": "TestLast",
  "email": "mayurkharat03@gmail.com",
  "password": "1234567890",
  "phoneNumber": "13345",
  "gender": 1,
  "billingAddress": "Testing",
  "shippingAddress": "Testing",
  "dateOfBirth": "1991-09-03T00:00:00.000Z",
  "aadhaarCard": "1234",
  "panCard": "1234",
  "photo": "Testing",
  "aadhaarFront": null,
  "aadhaarBack": null,
  "pancardPhoto": null,
  "referredBy": 1,
  "createdDate": "2021-05-07T05:27:08.000Z",
  "updatedDate": "2021-05-07T05:27:08.000Z"
}

const getformatedDate = (dateValue) => {
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = date.getMonth();
  const currentDate = date.getDate();
  return currentDate + "-" + month + "-" + year
}

const LabelValue = ({ label, value }) => {
  const classes = useStyles();
  return <Grid item className={classes.labelValueConatiner}>
    <Typography className={classes.label}>{label}</Typography>&nbsp;
    <Typography className={classes.value}>{value}</Typography>
  </Grid>
}

const UserDetailsView = ({ ...props }) => {
  const title = "Details";
  const classes = useStyles();
  const [state, setState] = React.useState({ "panCard": false, "addharCard": false });
  const [open, setOpen] = React.useState(false);
  const [prevImage, setPrevImage] = React.useState();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleOpen = (prevImage) => {
    setPrevImage(prevImage)
    return setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <Typography variant="h5" className={classes.fullName}>{detailsData.salutation + ". " + detailsData.firstName + " " + detailsData.lastName}</Typography>
              </Grid>
              <Grid item className={classes.basicDetailsContainer}>
                <Typography variant="h4" className={classes.basicDetailsTitle}>Basic Details:</Typography>
                <Grid container >
                  <Grid container xs={12} sm={6} md={6} >
                    <LabelValue label="First Name:" value={detailsData.firstName} />
                  </Grid>
                  <Grid container xs={12} sm={6} md={6}>
                    <LabelValue label="Middle Name:" value={detailsData.middleName} />
                  </Grid>
                  <Grid container xs={12} sm={6} md={6}>
                    <LabelValue label="Last Name:" value={detailsData.lastName} />
                  </Grid>
                  <Grid container xs={12} sm={6} md={6}>
                    <LabelValue label="Gender:" value={detailsData.gender} />
                  </Grid>
                  <Grid container xs={12} sm={6} md={6}>
                    <LabelValue label="Date of Birth : " value={getformatedDate(detailsData.dateOfBirth)} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.moreDetailsConatiner}>
              <Grid item container >
                <Typography variant="h4" className={classes.moreDetailsTitle}>More Details:</Typography>
                <Grid container >
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue label="Billing Address:" value={detailsData.billingAddress} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue label="Shipping Address:" value={detailsData.shippingAddress} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue label="Aadhaar Card:" value={detailsData.aadhaarCard} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <LabelValue label="Pancard:" value={detailsData.panCard} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container className={classes.kycDetailsConatiner}>
                <Grid container >
                  <Grid item xs={12} sm={6} md={6} className={classes.cardWrapper}>
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
                          style={{ display: 'none' }}
                          id="raised-button-file"
                          type="file"
                        />
                        <label htmlFor="raised-button-file">
                          <Button variant="raised" component="span" className={classes.button}>
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      <Checkbox
                        name={'panCard'}
                        className={classes.checkboxStyle}
                        checked={state.panCard}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                    </CardContent>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} className={classes.cardWrapper}>
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
                          style={{ display: 'none' }}
                          id="raised-button-file"
                          type="file"
                        />
                        <label htmlFor="raised-button-file">
                          <Button variant="raised" component="span" className={classes.button}>
                            <PublishIcon />
                          </Button>
                        </label>
                      </div>
                      <Checkbox
                        name={'addharCard'}
                        checked={state.addharCard}
                        onChange={handleChange}
                        className={classes.checkboxStyle}
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                      />
                    </CardContent>
                  </Grid>
                </Grid>
                <Button className={classes.approveButton}>Click to Approve</Button>
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
              <Grid item className={classes.closeConatiner} onClick={handleClose}>
                <CloseIcon className={classes.closeIcon}/>
              </Grid>
              <Grid container className={classes.previewImage}>
                <img
                  height="50%"
                  width="50%"
                  src={prevImage}
                />
              </Grid>
            </Grid>
          </Modal>
        </Container>
      </DashboardPage>
    </div>
  );
};

export default UserDetailsView;
