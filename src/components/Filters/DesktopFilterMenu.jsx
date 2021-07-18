import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    padding: 16,
  },
  content: {
    "& > div": {
      maxHeight: 300,
      overflow: "auto",
    },
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  marginTop: {
    marginTop: 16,
  },
  marginBottom: {
    marginBottom: 16,
  },
}));

function DesktopFilterMenu({
  maxWidth,
  title,
  onApply,
  onCancel,
  onClear,
  children,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ maxWidth }}>
      {/* <div className={clsx(classes.actions)}>
        <FilterMenuTitleText value={title} />

        {onCancel && (
          <IconButton onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        )}
      </div> */}
      <div
        className={clsx(
          classes.content,
          classes.marginTop,
          classes.marginBottom
        )}
      >
        {children}
      </div>

      {/* <Divider /> */}

      {/* <div className={clsx(classes.actions, classes.marginTop)}>
        <PrimaryButton size="small" onClick={onApply}>
          Apply
        </PrimaryButton>

        {onClear && (
          <TertiaryButton size="small" onClick={onClear}>
            Clear
          </TertiaryButton>
        )}
      </div> */}
    </div>
  );
}

DesktopFilterMenu.propTypes = {
  maxWidth: PropTypes.number,
  title: PropTypes.string.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onClear: PropTypes.func,
  children: PropTypes.node.isRequired,
};

DesktopFilterMenu.defaultProps = {
  maxWidth: 500,
};

export default DesktopFilterMenu;
