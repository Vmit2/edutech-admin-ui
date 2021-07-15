import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import TertiaryButton from "../../../../components/Buttons/TertiaryButton";
import CustomDialog from "../../../../components/CustomDialog";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import { deleteUserApi } from "../../../../hooks/api/useUserDetails";
import { invalidateUsers } from "../../../../hooks/api/useUsers";
function UsersActionMenu({ hasWritePermission, user }) {
  const menuButtonRef = useRef();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState(false);

  const handleActionClick = async (key) => {
    switch (key) {
      case "view":
        navigate(`${user.id_user}`);
        break;

      case "delete":
        setActiveDialog(true);
        break;

      default:
        setIsOpen(false);
      // setActiveDialog(key);
    }
  };

  const handleCloseDialog = () => {
    setActiveDialog(false);
  };

  const onSubmitDelete = () => {
    const { error, data } = deleteUserApi(user.id_user);
    if (!error) {
      handleSuccess();
    }
  };

  const handleSuccess = async () => {
    await invalidateUsers();
    handleCloseDialog();
    enqueueSnackbar("User Deleted successfully", {
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
      },
      {
        key: "delete",
        name: "Delete",
      },
    ];

    return availableActions;
  }, [hasWritePermission, user]);

  return actions.length > 0 ? (
    <>
      <IconButton ref={menuButtonRef} onClick={() => setIsOpen(true)}>
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
      </Menu>

      <CustomDialog
        userId={user.id}
        isOpen={activeDialog}
        onClose={handleCloseDialog}
        title="Delete User"
        content={`Do you really want to delete  ${user.salutation} ${user.first_name} ${user.middle_name} ${user.last_name} ?`}
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

UsersActionMenu.propTypes = {
  hasWritePermission: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default UsersActionMenu;
