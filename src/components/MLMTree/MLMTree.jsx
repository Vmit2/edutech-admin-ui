import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeView from "@material-ui/lab/TreeView";
import React from "react";
import getTreeItemsFromData from "./getTreeItemsFromData";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeNodeCard from "../TreeNodeCard";
import { useUrlParamsForChildTree } from "../../views/Hierarchy/ChildTree/useUrlParamsForChildTree";
import { useDistributersChildList } from "../../hooks/api/useDistributersChildList";
import { urlParamsToApiForChildTree } from "../../views/Hierarchy/ChildTree/urlParamsToApiForChildTree";

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
  },
});

const MLMTree = ({ first_item, selected, found, showChild, ...props }) => {
  const classes = useStyles();
  const { urlParamsForChild, setUrlParamForChild } = useUrlParamsForChildTree();
  const childTreeList = useDistributersChildList({
    params: urlParamsToApiForChildTree(urlParamsForChild),
  });
  // const item = first_item[0] ? first_item[0] : null;
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      {...props}
    >
      <TreeItem
        key={first_item && first_item.id_user}
        nodeId={first_item && first_item.id_user}
        // label={
        //   first_item &&
        //   `${first_item["first_name"]}`
        // }
        label={
          first_item ? (
            <TreeNodeCard
              label={first_item ? `${first_item["first_name"]}` : " "}
              hasChilds={true}
              childCount={60}
              selected={first_item && selected === first_item["id_user"]}
              nodeId={first_item && first_item["id_user"]}
              // found={found}
            />
          ) : null
        }
      >
        {getTreeItemsFromData(
          showChild,
          selected,
          found,
          first_item["id_user"] === showChild["id_user"]
        )}
      </TreeItem>
    </TreeView>
  );
};

export default MLMTree;
