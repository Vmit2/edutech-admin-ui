import TreeItem from "@material-ui/lab/TreeItem";
import React from "react";
import TreeNodeCard from "../TreeNodeCard";

const getTreeItemsFromData = (showChild, selectedId, found, matched) => {
  console.log("showChild", showChild);
  return (
    <>
      {matched && showChild && showChild.childs ? (
        showChild.childs.map((treeItemData) => {
          return (
            <TreeItem
              key={treeItemData && treeItemData.id_user}
              nodeId={treeItemData && treeItemData.id_user}
              label={
                <TreeNodeCard
                  label={treeItemData ? `${treeItemData["first_name"]}` : " "}
                  hasChilds={true}
                  childCount={60}
                  selected={
                    treeItemData && selectedId === treeItemData["id_user"]
                  }
                  nodeId={treeItemData && treeItemData["id_user"]}
                  // found={found}
                />
              }
            >
              {getTreeItemsFromData(
                showChild,
                selectedId,
                found,
                treeItemData["id_user"] === showChild["id_user"]
              )}
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

// treeItemData.childs && treeItemData.childs.length > 0 ? (
//   getTreeItemsFromData(treeItemData.childs, selectedId, found)
// )

// // return items.map((treeItemData) => {
//   return (
//     showChild &&
//     showChild.childs &&
//     showChild.childs.map((treeItemData) => {
//     const { name, childCount, referral_code } = useDistDetails(treeItemData);
//   return (
// <TreeItem
//   key={treeItemData && treeItemData.id_user}
//   nodeId={treeItemData && treeItemData.id_user}
//   // label={
//   //   <TreeNodeCard
//   //     label={`${treeItemData.salutaion}${treeItemData.first_name}${treeItemData.middle_name}${treeItemData.last_name}`}
//   //     hasChilds={true} //{childCount > 0}
//   //     referral_code={treeItemData.referral_code}
//   //     // childCount={childCount}
//   //     childCount={60}
//   //     selected={treeItemData && selectedId === treeItemData.id_user}
//   //     nodeId={treeItemData && treeItemData.id_user}
//   //     found={found}
//   //   />
//   // }
//   label={`${treeItemData.salutaion}${treeItemData.first_name}${treeItemData.middle_name}${treeItemData.last_name}`}
// >
//   {/* {showChild.id === treeItemData.id_user &&
//     showChild.childs &&
//     showChild.childs.length > 0 ? (
//       getTreeItemsFromData(showChild.childs, selectedId, found)
//     ) : (
//       <CircularProgress />
//     )} */}
// </TreeItem>
//   );)
// // });
