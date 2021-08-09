import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import PageBreadcrumbs from "../../components/PageBreadcrumbs/PageBreadcrumbs";
import PageTitleText from "../../components/Typography/PageTitleText/PageTitleText";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
  pageTitle: {
    marginTop: 30,
    marginBottom: 30,
  },
}));

function DashboardPage({
  className,
  documentTitle,
  head,
  hideBreadcrumbs,
  pageTitle,
  children,
  action
}) {
  const classes = useStyles();
  const hasHeaderContent = !hideBreadcrumbs || !!pageTitle;

  return (
    <div className={clsx(classes.root, className)}>
      <Helmet>
        <title>{documentTitle}</title>
        {head}
      </Helmet>

      <Container className={classes.container} maxWidth={false}>
        {hasHeaderContent && (
          <Grid container justify="space-between">
            <Grid item>
              {!hideBreadcrumbs && <PageBreadcrumbs />}

              {pageTitle && <PageTitleText value={pageTitle} />}
            </Grid>
            <Grid item><br/><br/>{action && action}</Grid>
          </Grid>
        )}

        {children}
      </Container>
    </div>
  );
}

DashboardPage.propTypes = {
  className: PropTypes.string,
  documentTitle: PropTypes.string,
  head: PropTypes.element,
  hideBreadcrumbs: PropTypes.bool,
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  action:PropTypes.any,
};

DashboardPage.defaultProps = {
  head: null,
  hideBreadcrumbs: false,
};

export default DashboardPage;
