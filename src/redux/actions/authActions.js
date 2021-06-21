// import AuthService from 'src/services/api/AuthService'

export const SESSION_LOADED = '@auth/session-loaded'
export const LOGIN_REQUEST = '@auth/login-request'
export const LOGIN_SUCCESS = '@auth/login-success'
export const LOGIN_FAILURE = '@auth/login-failure'
export const LOGOUT = '@auth/logout'
export const UPDATE_PROFILE = '@auth/update-profile'

export function loadSession() {
  return async (dispatch) => {
    // const isLoggedIn = await AuthService.loadSession()

    dispatch({
      type: SESSION_LOADED,
      // payload: { isLoggedIn },
    })
  }
}

export function login(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST })
      // await AuthService.getSession(email, password)
      dispatch({ type: LOGIN_SUCCESS })
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE })
      throw err
    }
  }
}

export function logout() {
  return async (dispatch) => {
    // AuthService.clearSession()

    // Remove all user specific cached queries on user logout.
    // queryCache.removeQueries(() => true)

    // dispatch({ type: CLEAR_USER_STATE })

    return dispatch({ type: LOGOUT })
  }
}

export function register() {
  return true
}
