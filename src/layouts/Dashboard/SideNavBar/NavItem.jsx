import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    width: "100%",
    justifyContent: "flex-start",
    padding: "10px 8px",
    color: theme.palette.text.secondary,
    fontSize: 16,
    fontWeight: theme.typography.fontWeightSemibold,
    textTransform: "none",
    letterSpacing: 0,
  },
  buttonLeaf: {
    justifyContent: "flex-start",
    width: "100%",
    padding: "10px 8px",
    color: theme.palette.text.side_labels,
    fontSize: 16,
    fontWeight: theme.typography.fontWeightSemibold,
    textTransform: "none",
    letterSpacing: 0,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightSemibold,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

function NavItem({
  title,
  href,
  children,
  icon: Icon,
  className,
  ...rest
}) {
  const classes = useStyles();
  let paddingLeft = 8;
  const style = { paddingLeft };
  return (
    <ListItem
      disableGutters
      className={clsx(classes.itemLeaf, className)}
      key={title}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf)}
        component={RouterNavLink}
        style={style}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  );
}

NavItem.propTypes = {
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;
