import { ADD_CHILD, EXPAND_TREE_NODE } from "../../config/constants";

export function addTreeNode(node, flag, id) {
  return {
    type: ADD_CHILD,
    payload: { node: node, root: flag, id: id },
  };
}

export function expandTreeNode(expandArr) {
  return {
    type: EXPAND_TREE_NODE,
    payload: expandArr,
  };
}
