import { queryCache } from "react-query";
import AuthService from "../../services/api/AuthService";
import UserSettings from "../../utils/UserSettings";
import { setActiveUser } from "./userActions";

export const SESSION_LOADED = "@auth/session-loaded";
export const LOGIN_REQUEST = "@auth/login-request";
export const LOGIN_SUCCESS = "@auth/login-success";
export const LOGIN_FAILURE = "@auth/login-failure";
export const LOGOUT = "@auth/logout";
export const UPDATE_PROFILE = "@auth/update-profile";

export function loadSession() {
  return async (dispatch) => {
    const isLoggedIn = await AuthService.loadSession();

    dispatch({
      type: SESSION_LOADED,
      payload: { isLoggedIn },
    });
  };
}

export function login(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const data = await AuthService.getSession(email, password);
      UserSettings.save(data.user);
      dispatch(setActiveUser(data.user));
      dispatch({ type: LOGIN_SUCCESS });
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE });

      throw err;
    }
  };
}

export function logout() {
  return async (dispatch) => {
    AuthService.clearSession();

    // Remove all user specific cached queries on user logout.
    // queryCache.removeQueries(() => true);

    return dispatch({ type: LOGOUT });
  };
}

export function register() {
  return true;
}
