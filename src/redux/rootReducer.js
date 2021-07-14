import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import treeReducer from './reducers/treeReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  tree: treeReducer,
})

export default rootReducer;
