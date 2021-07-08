import { SET_ACTIVE_USER } from "../../config/constants";


export function setActiveUser(details) {
  return {
    type: SET_ACTIVE_USER,
    payload: details,
  }
}
