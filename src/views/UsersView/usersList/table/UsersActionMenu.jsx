import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import { setUserDetails, getUserDetails } from "../../../../hooks/api/useUserDetails";
// import UserDeleteDialog from 'src/forms/UserForm/UserDeleteDialog'
// import UserRetireDialog from 'src/forms/UserForm/UserRetireDialog'
// import { setUserDetails } from "src/hooks/api/useUserDetails";

function UsersActionMenu({ hasWritePermission, user }) {
  const menuButtonRef = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState("");

  const handleActionClick = async (key) => {
    switch (key) {
      case "view":
        setUserDetails(user.id_user, user);

        navigate(`${user.id_user}`);
        break;

      case "delete":
        // setUserDetails(user.id_user, user);
        getUserDetails(user.id_user);
        // navigate("${user.id}/edi");
        break;

      default:
        setIsOpen(false);
        setActiveDialog(key);
    }
  };

  const handleCloseDialog = () => {
    setActiveDialog("");
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

      {/* <UserRetireDialog
        userId={user.id}
        isOpen={activeDialog === 'retire'}
        onClose={handleCloseDialog}
      />
      <UserDeleteDialog
        userId={user.id}
        isOpen={activeDialog === 'delete'}
        onClose={handleCloseDialog}
      /> */}
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
