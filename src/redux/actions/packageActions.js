import { SET_PACKAGE_DETAILS } from "../../config/constants";


export function setPackage(details) {
  return {
    type: SET_PACKAGE_DETAILS,
    payload: details,
  }
}
