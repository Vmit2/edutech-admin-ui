import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import React from "react";
import ChevronLeftIcon from "../Icons/ChevronLeftIcon";
import CloseIcon from "../Icons/CloseIcon";
import CardTitleText from "../Typography/CardTitleText";
import SummaryResultsText from "../Typography/SummaryResultsText";
function CustomDialog({ isOpen, onClose, title, content,actionItems }) {
  const handleClose = () => {
    onClose();
  };

  const handleClassInstanceEditSuccess = async () => {
    handleClose();
  };

  return (
    <Dialog
      fullWidth
      aria-label="Class"
      //   maxWidth={showEditForm ? "md" : "xs"}
      open={isOpen}
      onClose={handleClose}
    >
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        px={2}
        py={1}
      >
        <Box alignItems="center" display="flex">
          {/* <Box mr={2}> */}
          {/* <IconButton><ChevronLeftIcon /></IconButton> */}
          {/* </Box> */}

          <CardTitleText noPadding value={title} />
        </Box>

        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <DialogContent>
        {/* { && <LoadingProgress p={5} />} */}
        <>
          <Box mb={2}></Box>
          <SummaryResultsText value={content} />
        </>
        {actionItems}
        {/* )} */}
      </DialogContent>
    </Dialog>
  );
}

CustomDialog.propTypes = {
  //   isOpen: PropTypes.bool.isRequired,
  //   onClose: PropTypes.func.isRequired,
};

export default CustomDialog;
