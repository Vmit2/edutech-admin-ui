import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import SummaryResultsText from "../Typography/SummaryResultsText";
import { isEmpty } from "../../utils/isEmpty" ;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: 30,
  },
  noMarginTop: {
    marginTop: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  legend: {
    marginTop: 15,
  },
}));

function ListSummaryBar({
  noMarginTop,
  noMarginBottom,
  action,
  count,
  totalCount,
  legend,
}) {
  const classes = useStyles();
  const rootClassNames = clsx(classes.root, {
    [classes.noMarginTop]: noMarginTop,
    [classes.noMarginBottom]: noMarginBottom,
  });

  return (
    <div className={rootClassNames}>
      <div>
        {!isEmpty(count) && !isEmpty(totalCount) && (
          <>
            {/* <SummaryResultsText
              noMarginBottom
              noMarginTop
              value={`Showing ${count} of ${totalCount} results`}
            /> */}

            {legend && <div className={classes.legend}>{legend}</div>}
          </>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}

ListSummaryBar.propTypes = {
  noMarginTop: PropTypes.bool,
  noMarginBottom: PropTypes.bool,
  action: PropTypes.node,
  legend: PropTypes.node,
  count: PropTypes.number,
  totalCount: PropTypes.number,
};

ListSummaryBar.defaultProps = {
  action: null,
  noMarginTop: false,
  noMarginBottom: false,
};

export default ListSummaryBar;
