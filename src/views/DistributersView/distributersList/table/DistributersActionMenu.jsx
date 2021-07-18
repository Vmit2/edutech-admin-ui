import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TertiaryButton from "../../../../components/Buttons/TertiaryButton";
import CustomDialog from "../../../../components/CustomDialog";
import TrashIcon from "../../../../components/Icons/TrashIcon";
import ViewIcon from "../../../../components/Icons/ViewIcon";
import { deleteDistributerApi } from "../../../../hooks/api/useDistributerDetails";
import { invalidateDistributers } from "../../../../hooks/api/useDistributers";

function DistributersActionMenu({ hasWritePermission, distributer }) {
  const menuButtonRef = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleActionClick = async (key) => {
    switch (key) {
      case "view":
        // setDistributerDetails(distributer.id_distributer, distributer);
        navigate(`${distributer.id_referral_code}`);
        break;

      case "delete":
        setActiveDialog(true);
        break;

      default:
        setIsOpen(false);
        setActiveDialog(key);
    }
  };

  const handleCloseDialog = () => {
    setActiveDialog(false);
  };

  const onSubmitDelete = () => {
    const { error, data } = deleteDistributerApi(distributer.id_user);
    if (!error) {
      handleSuccess();
    }
  };

  const handleSuccess = async () => {
    await invalidateDistributers();
    handleCloseDialog();
    enqueueSnackbar("Distributer Inactived successfully", {
      variant: "success",
    });
  };

  const actions = useMemo(() => {
    if (!hasWritePermission) {
      return [];
    }

    let availableActions = [
      {
        key: "view",
        name: "View",
        icon: null,
      },
      {
        key: "delete",
        name: "Inactive",
        icon:"Trashcan"
      },
    ];

    return availableActions;
  }, [hasWritePermission, distributer]);

  return actions.length > 0 ? (
    <>
      {/* <IconButton ref={menuButtonRef} onClick={() => setIsOpen(true)}>
        <MoreHorizontalIcon fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={menuButtonRef.current}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {actions.map((action) => {
          const { key, name } = action;

          return (
            <MenuItem key={key} onClick={() => handleActionClick(key)}>
              <Typography variant="button">{name}</Typography>
            </MenuItem>
          );
        })}
      </Menu> */}
      <Grid container alignItems="center">
        {actions.map((action) => {
          const { key, name } = action;
          return (
            <Grid item key={key} onClick={() => handleActionClick(key)}>
              {action.icon ? (
                <MenuItem>
                  <TrashIcon style={{ color: "red" }} />
                </MenuItem>
              ) : (
                <MenuItem>
                  <ViewIcon style={{ color: "blue" }} />
                  <Typography variant="button">{name}</Typography>
                </MenuItem>
              )}
            </Grid>
          );
        })}
      </Grid>
      <CustomDialog
        userId={distributer.id}
        isOpen={activeDialog}
        onClose={handleCloseDialog}
        title="Inactive User"
        content={`Do you really want to Inactive  ${distributer.first_name} ${distributer.middle_name} ${distributer.last_name} ?`}
        actionItems={
          <>
            <TertiaryButton
              style={{
                width: "8rem",
                height: "2.5rem",
                marginRight: "2rem",
                border: "1px solid ",
              }}
              onClick={handleCloseDialog}
            >
              Cancle
            </TertiaryButton>
            <PrimaryButton
              onClick={onSubmitDelete}
              style={{ width: "8rem", height: "2.5rem" }}
            >
              Sure
            </PrimaryButton>
          </>
        }
      />
    </>
  ) : (
    <Button onClick={() => handleActionClick("view")}>{"View"}</Button>
  );
}

DistributersActionMenu.propTypes = {
  hasWritePermission: PropTypes.bool.isRequired,
  distributer: PropTypes.object.isRequired,
};

export default DistributersActionMenu;
