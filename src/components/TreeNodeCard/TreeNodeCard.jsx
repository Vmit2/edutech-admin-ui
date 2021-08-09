import { Box, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import someImage from "../../assets/images/ref1.png";
import { IMAGE_BASE_URL } from "../../config/constants";
import FilledCircleCount from "../FilledCircleCount/FilledCircleCount";
import TreeNodeLabel from "../Typography/TreeNodeLabel/TreeNodeLabel";
const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.body1,
    fontWeight: 700,
    border: "outset 0.2rem",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: theme.palette.background.default,
    backgroundColor: theme.palette.module.backgroundLight,
    paddingLeft: "2rem",
    "&:hover": {
      border: "outset 0.2rem",
      borderColor: theme.palette.primary.main,
      textDecoration: "none",
      backgroundColor: theme.palette.module.backgroundLight,
    },
  },
  activeCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    ...theme.typography.body1,
    fontWeight: 700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: theme.palette.module.backgroundLight,
    textDecoration: "none",
    paddingLeft: "2rem",
    border: "outset 0.2rem",
    borderColor: theme.palette.common.green,
  },
  found: {
    border: `dashed 1px ${theme.palette.primary.main}`,
  },
  CardHeader: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: "5rem",
    height: "5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  user: {
    border: "outset 0.2rem",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: theme.palette.text.user,
    padding: "10px",
  },
  distributer: {
    border: "outset 0.2rem",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: theme.palette.text.distributer,
  },
  imgContainerDist: {
    border: "outset 0.2rem",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: "#7658F9",
  },

  imgContainerUser: {
    border: "outset 0.2rem",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: "#7658F9",
  },
  circle: {
    position: "absolute",
    width: "20rem",
    height: "2rem",
    right: "-5%",
    justifyContent: "flex-start",
    paddingLeft: "5%",
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));

function TreeNodeCard({
  className,
  value,
  hasChilds,
  label,
  id_referral_code,
  childCount,
  image,
  selected,
  nodeId,
  found,
  ...props
}) {
  const classes = useStyles();
  const elProps = {
    className: clsx(
      selected && childCount !== 0 ? classes.activeCard : classes.card,
      found === nodeId ? classes.found : "",
      className
    ),
    ...props,
  };
  const imageProps = {
    className: clsx(
      hasChilds ? classes.distributer : classes.user,
      classes.image
    ),
  };

  const imageContainerStyle = {
    className: clsx(
      hasChilds ? classes.imgContainerDist : classes.imgContainerUser
    ),
  };

  return (
    <Card {...elProps}>
      <div {...imageContainerStyle}>
        <CardMedia
          component="img"
          alt={label[0]}
          src={image ? IMAGE_BASE_URL + image : someImage}
          {...imageProps}
        />
      </div>
      <CardContent className={classes.CardHeader}>
        <Box className={classes.titleContainer}>
          <TreeNodeLabel title={label} value={label} />
          <TreeNodeLabel
            title={id_referral_code}
            value={" [ User Id  -  " + nodeId + " ]"}
          />
          <TreeNodeLabel
            title={id_referral_code}
            value={" [ Referel Id  -  " + id_referral_code + " ]"}
          />
        </Box>
        <>
          {hasChilds && (
            <FilledCircleCount
              circleClassName={classes.circle}
              value={"Immediate Referral Count: " + childCount}
              variant="orange"
            />
          )}
        </>
      </CardContent>
    </Card>
  );
}

TreeNodeCard.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  distributer: PropTypes.bool,
};

export default TreeNodeCard;
