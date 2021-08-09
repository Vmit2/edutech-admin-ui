import TreeItem from "@material-ui/lab/TreeItem";
import React from "react";
import LoadingProgress from "../LoadingProgress";
import TreeNodeCard from "../TreeNodeCard";

const getTreeItemsFromData = (treeItemData, selectedId, found) => {
  return (
    <>
      {treeItemData ? (
        treeItemData.map((item) => {
          return (
            <TreeItem
              key={item && item.id_user}
              nodeId={item && item.id_user}
              label={
                <TreeNodeCard
                  label={item ? `${item.first_name} ${item.middle_name} ${item.last_name}` : " "}
                  hasChilds={item.childCount > 0}
                  childCount={item && item.childCount}
                  selected={item && selectedId === item.id_user}
                  nodeId={item && item.id_user}
                  id_referral_code={item && item.code}
                  found={found}
                  image={item && item.photo}
                />
              }
            >
              {item.childs && item.childs.length > 0 ? (
                getTreeItemsFromData(item.childs, selectedId, found)
              ) : item.childCount > 0 ? (
                <TreeItem
                  key={"loading_child" + item["id_user"]}
                  nodeId={"loading_child" + item["id_user"]}
                  label={<LoadingProgress p={2} />}
                ></TreeItem>
              ) : null}
            </TreeItem>
          );
        })
      ) : (
        <div>nothing to show</div>
      )}
    </>
  );
};

export default getTreeItemsFromData;
