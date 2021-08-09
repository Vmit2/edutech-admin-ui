import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeView from "@material-ui/lab/TreeView";
import React from "react";
import { useTreeState } from "../../hooks/redux/useTreeState";
import getTreeItemsFromData from "./getTreeItemsFromData";

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
  },
});

const MLMTree = ({ selected, found, ...props }) => {
  const classes = useStyles();
  const { tree, expanded } = useTreeState();
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      {...props}
    >
      {getTreeItemsFromData(tree, selected, found)}
    </TreeView>
  );
};

export default MLMTree;
