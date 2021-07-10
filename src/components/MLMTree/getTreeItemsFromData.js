import CircularProgress from "@material-ui/core/CircularProgress";
import TreeItem from "@material-ui/lab/TreeItem";
import React from "react";
import { useDistDetails } from "../../hooks/useDistDetails";
import TreeNodeCard from "../TreeNodeCard";

const getTreeItemsFromData = (items, selectedId, found, showChild) => {
  // return items.map((treeItemData) => {
  return (
    showChild &&
    showChild.childs &&
    showChild.childs.map((treeItemData) => {
      const { name, childCount, referral_code } = useDistDetails(treeItemData);
      return (
        <TreeItem
          key={treeItemData && treeItemData.id_user}
          nodeId={treeItemData && treeItemData.id_user}
          label={
            <TreeNodeCard
              label={name}
              hasChilds={true} //{childCount > 0}
              referral_code={referral_code}
              // childCount={childCount}
              childCount={60}
              selected={treeItemData && selectedId === treeItemData.id_user}
              nodeId={treeItemData && treeItemData.id_user}
              found={found}
            />
          }
        >
          {showChild.id === treeItemData.id_user &&
          showChild.childs &&
          showChild.childs.length > 0 ? (
            getTreeItemsFromData(showChild.childs, selectedId, found)
          ) : (
            <CircularProgress />
          )}
        </TreeItem>
      );
    })
  );
};

export default getTreeItemsFromData;

// treeItemData.childs && treeItemData.childs.length > 0 ? (
//   getTreeItemsFromData(treeItemData.childs, selectedId, found)
// )
