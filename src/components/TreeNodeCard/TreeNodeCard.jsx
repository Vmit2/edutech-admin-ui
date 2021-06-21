import { Avatar, Box, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import clsx from "clsx";
import PropTypes from "prop-types";
import FilledCircleCount from "../FilledCircleCount/FilledCircleCount";

const useStyles = makeStyles((theme) => ({
  card: {
    // height: "3rem",
    cursor: "pointer",
    ...theme.typography.body1,
    fontWeight: 700,
    backgroundColor: "white",
    "&:hover": {
      border: "solid 0.2rem",
      borderColor: theme.palette.primary.main,
      textDecoration: "none",
      backgroundColor: "white",
    },
  },
  activeCard: {
    // height: "3rem",
    cursor: "pointer",
    ...theme.typography.body1,
    fontWeight: 700,
    backgroundColor: theme.palette.primary.light,
    textDecoration: "none",
  },
  found: {
    border: `dashed 1px ${theme.palette.primary.main}`,
  },
  CardHeader: {
    // borderRadius: "2rem",
  },
  user: {
    border: "solid 0.2rem",
    borderColor: theme.palette.text.user,
  },
  distributer: {
    border: "solid 0.2rem",
    borderColor: theme.palette.text.distributer,
  },
  circle: {
    width: 30,
    transform: "scale(0.7)",
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function TreeNodeCard({
  className,
  value,
  hasChilds,
  label,
  referral_code,
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

  return (
    <CardHeader
      component="div"
      {...elProps}
      classes={{ content: classes.CardHeader }}
      avatar={
        <Avatar
          aria-label="recipe"
          className={hasChilds ? classes.distributer : classes.user}
        >
          {!image ? image : <PermIdentityIcon />}
        </Avatar>
      }
      title={
        <Box className={classes.titleContainer}>
          {label}
          {hasChilds && (
            <FilledCircleCount
              circleClassName={classes.circle}
              value={childCount}
              variant="blue"
            />
          )}
        </Box>
      }
      subheader={`(${referral_code}) [UID - ${nodeId}]`}
    />
  );
}

TreeNodeCard.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  distributer: PropTypes.bool,
};

export default TreeNodeCard;
