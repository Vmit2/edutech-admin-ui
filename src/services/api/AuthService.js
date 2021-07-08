import {
  apiClient,
  removeApiClientAuthHeader,
  setApiClientAuthHeader
} from '../../services/apiClient';
import StorageService from '../../utils/storage/StorageService';

// TODO: Don't store the access token in localStorage because it's vulnerable
// to XSS attacks. Instead, store the access token in memory and have the
// server send a secure, http only cookie with a refresh token.

const TOKEN_STORAGE_KEY = 'acutetech';

async function getSession(username, password) {
  const url = `/admin/getAdminLogin`;
  const body = { username, password };

  const res = await apiClient.post(url, body);
  const { token , result } = res.data;
  const userData = result[0];
  // store.dispatch(setActiveUser(userData));
  if (!token) {
    throw new Error('Authentication failed.');
  }

  StorageService.save(TOKEN_STORAGE_KEY, token);

  setApiClientAuthHeader(token);
  const data = {
    "user":userData,
    "resolved":true
  }
  return data;
}

// In the future, this will likely be an async call to refresh the token.
async function loadSession() {
  const token = StorageService.load(TOKEN_STORAGE_KEY)

  if (!token) {
    return false
  }

  setApiClientAuthHeader(token)

  return true
}

function clearSession() {
  StorageService.remove(TOKEN_STORAGE_KEY)

  removeApiClientAuthHeader()
}

function setApiClientInterceptor({ onLogout }) {
  apiClient.interceptors.response.use(
    (response) => response,
    (err) => {
      const { error } = err

      if (error.response && error.response.status === 401) {
        clearSession()

        if (onLogout) {
          onLogout()
        }
      }

      return Promise.reject(err)
    },
  )
}

export default {
  getSession,
  loadSession,
  clearSession,
  setApiClientInterceptor,
}
