/* eslint-disable no-param-reassign */
import produce from 'immer'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SESSION_LOADED,
  UPDATE_PROFILE,
} from '../actions/authActions'

const initialState = {
  hasLoadedSession: false,
  isLoggedIn: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_LOADED: {
      const { isLoggedIn } = action.payload

      return produce(state, (draftState) => {
        draftState.hasLoadedSession = true
        draftState.isLoggedIn = isLoggedIn
      })
    }

    case LOGIN_REQUEST: {
      return produce(state, (draftState) => {
        // Ensure we clear current session
        draftState.isLoggedIn = false
      })
    }

    case LOGIN_SUCCESS: {
      return produce(state, (draftState) => {
        draftState.isLoggedIn = true
      })
    }

    case LOGIN_FAILURE: {
      return produce(state, () => {
        // Maybe store error
      })
    }

    case LOGOUT: {
      return produce(state, (draftState) => {
        draftState.isLoggedIn = false
      })
    }

    case UPDATE_PROFILE: {
      return produce(state, () => {})
    }

    default: {
      return state
    }
  }
}

export default authReducer
