import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TertiaryLinkText from "../Typography/TertiaryLinkText";
import { parsePathname } from "./parsePathname";

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 500,
  },
  active: {
    color: theme.palette.text.primary,
  },
}));

function PageBreadcrumbs() {
  const classes = useStyles();

  const location = useLocation();
  const crumbs = useMemo(() => parsePathname(location.pathname), [location]);
  return (
    <Breadcrumbs
      aria-label="Navigation breadcrumbs"
      separator={<ChevronRightIcon fontSize="small" />}
    >
      {crumbs.map((crumb) =>
        crumb.isLink ? (
          <Link
            component={RouterLink}
            key={crumb.href}
            to={crumb.href}
            underline="none"
          >
            <TertiaryLinkText className={classes.link} value={crumb.title} />
          </Link>
        ) : (
          <Typography color="textPrimary" key={crumb.href}>
            {crumb.title}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}

export default PageBreadcrumbs;
