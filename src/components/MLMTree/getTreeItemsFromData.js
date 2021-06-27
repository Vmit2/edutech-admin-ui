import TreeItem from "@material-ui/lab/TreeItem";
import React from "react";
import { useDistDetails } from "../../hooks/useDistDetails";
import TreeNodeCard from "../TreeNodeCard";

const getTreeItemsFromData = (items, selectedId, found) => {
  return items.map((treeItemData) => {
    const { name, childCount, referral_code } = useDistDetails(treeItemData);
    return (
      <TreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id}
        label={
          <TreeNodeCard
            label={name}
            hasChilds={childCount > 0}
            referral_code={referral_code}
            childCount={childCount}
            selected={selectedId === treeItemData.id}
            nodeId={treeItemData.id}
            found={found}
          />
        }
      >
        {treeItemData.childs &&
          treeItemData.childs.length > 0 &&
          getTreeItemsFromData(treeItemData.childs, selectedId, found)}
      </TreeItem>
    );
  });
};

export default getTreeItemsFromData;
