import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import packageReducer from "./reducers/packageReducer";
import treeReducer from "./reducers/treeReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  tree: treeReducer,
  package: packageReducer,
});

export default rootReducer;
