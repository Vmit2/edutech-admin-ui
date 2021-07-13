import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import UserService from "../../services/api/UserService";

function queryFn(_, { userId }) {
  // return UserService.updateKyc(userId);
}

function buildQueryKey(id) {
  const userId = Number(id);

  return [QueryKeys.USER_DETAILS, { userId }];
}

export function useUserDetails(userId) {
  const queryKey = buildQueryKey(userId);
  const queryData = queryCache.getQueryData(queryKey);
  return queryData;
}

export function getUserDetails(userId) {
  const queryKey = buildQueryKey(userId);
  const queryData = queryCache.getQueryData(queryKey);
}

export function setUserDetails(userId, data, opts = {}) {
  const queryKey = buildQueryKey(userId);
  const config = {
    staleTime: QUERY_STALE_TIME,
    ...opts,
  };

  queryCache.setQueryData(queryKey, data, config);
}

export async function updateKyc(userId) {
  try {
    const data = await UserService.updateKyc(userId);
    return {
      error: false,
      data,
    };
  } catch (err) {
    const apiErrorMessage = err.edutechError
      ? err.error.response.data.message
      : "An unexpected error occurred. Please try again.";

    return {
      error: true,
      apiErrorMessage,
    };
  }
}

async function deleteUserApi(userId){
  try {
    const data = await UserService.deleteUser(userId);
    return {
      error: false,
      data,
    };
  } catch (err) {
    const apiErrorMessage = err.edutechError
      ? err.error.response.data.message
      : "An unexpected error occurred. Please try again.";

    return {
      error: true,
      apiErrorMessage,
    };
  }
}

export function removeUserDetails(userId) {
  const queryKey = buildQueryKey(userId);

  queryCache.removeQueries(queryKey);
}

export{
  deleteUserApi
}
