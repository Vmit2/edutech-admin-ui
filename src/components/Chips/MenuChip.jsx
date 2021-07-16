/* eslint-disable react/prop-types */
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useState } from "react";
import BaseChip from "./BaseChip";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.module.border}`,
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.text.secondary,
      border: `1px solid ${theme.palette.text.secondary}`,
    },
  },
  active: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.text.secondary}`,
  },
}));

function MenuChip({ content, isActive, isOpen, onClick, onClose, ...props }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const rootClassNames = clsx(classes.root, {
    [classes.active]: isActive || isOpen,
  });

  const handleChipClick = (event) => {
    setAnchorEl(event.currentTarget);

    if (onClick) {
      onClick(event);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    onClose();
  };

  return (
    <>
      <BaseChip
        classes={{ root: rootClassNames }}
        onClick={handleChipClick}
        {...props}
      />

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 44, // Chip height is fixed, so this is 8px below chip (36 + 8 = 44)
          horizontal: "left",
        }}
        open={isOpen}
        onClose={handleMenuClose}
      >
        {content}
      </Popover>
    </>
  );
}

MenuChip.defaultProps = {
  clickable: true,
};

// Avoid eslint error (seems like bug).
MenuChip.propTypes = {};

export default MenuChip;
