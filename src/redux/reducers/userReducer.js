/* eslint-disable no-param-reassign */
import produce from "immer";
import { SET_ACTIVE_USER } from "../../config/constants";

const initialState = {
  error: false,
  details: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER: {
      const details = action.payload;

      return produce(state, (draftState) => {
        draftState.details = details;
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

export default userReducer;
