import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import { setDistributerDetails } from "../../../../hooks/api/useDistributerDetails";

function DistributersActionMenu({ hasWritePermission, distributer }) {
  const menuButtonRef = useRef();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState("");

  const handleActionClick = async (key) => {
    switch (key) {
      case "view":
        // setDistributerDetails(distributer.id_user, distributer);
        console.log('distributer ',distributer);
        navigate(`${distributer.id_referral_code}`);
        break;

      case "delete":
      
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
  }, [hasWritePermission, distributer]);

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

      {/* <DistributerRetireDialog
        distributerId={distributer.id}
        isOpen={activeDialog === 'retire'}
        onClose={handleCloseDialog}
      />
      <DistributerDeleteDialog
        distributerId={distributer.id}
        isOpen={activeDialog === 'delete'}
        onClose={handleCloseDialog}
      /> */}
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
