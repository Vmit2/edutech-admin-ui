import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profileConatiner: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.module.backgroundLight,
    flexDirection: "column",
    width: "100%",
    boxShadow: theme.palette.shadow.primary,
    padding: "20px 40px 8rem",
    marginBottom: "2rem",
    borderRadius: "10px 10px 10px 10px",
  },
  imageContainer: {
    alignSelf: "center",
    marginTop: "-5rem",
    position: "relative",
    color: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fullName: {
    marginTop: "10px",
  },
  basicDetailsContainer: {
    position: "relative",
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
    border: "10px solid",
    backgroundColor: theme.palette.common.green,
  },
  moreDetailsConatiner: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    flexDirection: "column",
    width: "98%",
    boxShadow: theme.palette.shadow.secondary,
    padding: "20px 40px 20px",
    margin: "-8rem auto 0",
    borderRadius: "10px 10px 10px 10px",
  },
  moreDetailsTitle: {
    color: theme.palette.common.black,
    marginBottom: 10,
  },
  labelValueConatiner: {
    display: "flex",
    marginBottom: "10px",
  },
  label: {
    fontWeight: "600",
  },
  value: {
    fontWeight: "200",
  },
  cardWrapper: {
    position: "relative",
  },
  cardImageConatiner: {
    width: "200px",
    height: "150px",
    marginBottom: "10px",
    position: "relative",
  },
  cardImage: {
    position: "relative",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "200px",
      height: "150px",
      background: "#00000069",
    },
  },
  overlayContainer: {
    position: "absolute",
    left: 0,
    bottom: 30,
    display: "flex",
    justifyContent: "space-around",
    width: "200px",
    padding: "5px 20px",
    color: "#FFF",
    background: "#FFFFFF47",
  },
  kycDetailsConatiner: {
    marginTop: "30px",
  },
  buttonContainer:{
    
  },
  approveButton: {
    marginTop: "30px",
    background: theme.palette.module.backgroundLight,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.module.backgroundLight,
    },
    "&:disabled" : {
      color: theme.palette.common.white,
      opacity : 0.5,
    }
  },
  updateButton : {
    marginTop: "30px",
    background:  theme.palette.common.white,
    border : "1px solid " + theme.palette.module.backgroundLight,
    color: theme.palette.module.backgroundLight,
    "&:hover": {
      color: theme.palette.module.backgroundLight,
    },
    "&:disabled" : {
      color:theme.palette.module.backgroundLight,
      opacity : 0.5,
    }
  },
  checkboxStyle: {
    padding: "unset",
  },
  button: {
    color: "#fff",
  },
  previewImageWrapper: {
    justifyContent: "center",
    flexDirection: "column",
    padding: "3rem",
  },
  previewImage: {
    justifyContent: "center",
  },
  closeConatiner: {
    alignSelf: "flex-end",
    cursor: "pointer",
  },
  closeIcon: {
    fontSize: "40px",
    color: theme.palette.common.white,
  },
  modal: {
    height: "100vh",
  },
  packageConatinerWrapper:{
    flexDirection : "column",
    marginTop : '30px',
  },
  packageCardWrapper:{
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "1rem",
  },
  packageCard : {
  }
}));
  export default useStyles;