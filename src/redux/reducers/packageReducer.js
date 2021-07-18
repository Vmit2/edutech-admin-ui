/* eslint-disable no-param-reassign */
import produce from "immer";
import { SET_PACKAGE_DETAILS } from "../../config/constants";

const initialState = {
  details: null,
};

const packageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PACKAGE_DETAILS: {
      const details = action.payload;

      return produce(state, (draftState) => {
        draftState.details = details;
      });
    }
    default: {
      return state;
    }
  }
};

export default packageReducer;
