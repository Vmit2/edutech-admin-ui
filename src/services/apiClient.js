import axios from 'axios';
import { API_BASE_URL } from '../config/constants';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
})

// Custom response handler to flag any non-500 errors from our server.
// Components can handle these errors specifically by checking for
// the presence of 'edutechError'.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const edutechError = error.response && error.response.status < 500

    return Promise.reject({
      edutechError,
      error,
    })
  },
)

export function setApiClientAuthHeader(token) {
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`
}

export function removeApiClientAuthHeader() {
  delete apiClient.defaults.headers.common.Authorization
}
