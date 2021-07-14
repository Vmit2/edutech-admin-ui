/* eslint-disable no-param-reassign */
import produce from "immer";
import { ADD_CHILD, EXPAND_TREE_NODE } from "../../config/constants";
import { findTreeNode } from "../../utils/tree/traverseTree";

const initialState = {
  tree: [],
  expanded: [],
};

const treeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD: {
      const { node, root, id } = action.payload;
      if (root && node.length > 0 && state.tree.length === 0) {
        node.map((n) => {
          return state.tree.push({ childs: [], ...n });
        });
      } else if (!root && state.tree.length > 0) {
        let foundNode = findTreeNode(id, state.tree);
        foundNode.childs = node;
        state.expanded.push(id);
      }

      return {
        ...state,
        tree: state.tree,
      };
    }

    case EXPAND_TREE_NODE: {
      return produce(state, (draftState) => {
        draftState.expanded = action.payload;
      });
    }

    // case CLEAR_USER_STATE: {
    //   return produce(state, (draftState) => {
    //     draftState.hasLoadedUserBusinesses = false
    //     draftState.error = false
    //     draftState.activeBusinessId = null
    //     draftState.businesses = {}
    //   })
    // }

    default: {
      return state;
    }
  }
};

export default treeReducer;
