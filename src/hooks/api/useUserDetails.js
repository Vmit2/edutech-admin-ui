import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import UserService from "../../services/api/UserService";

function queryFn(_, { params }) {
  return UserService.getUserById(params);
}

function buildQueryKey(params) {
  return [QueryKeys.USER_DETAILS, { params }];
}

export function useUserDetails(id) {
  const enabled = true;
  const queryKey = buildQueryKey(id);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });
  return {
    status,
    userResponse: data && data.data.results && data.data.results[0],
    error,
  };
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

async function deleteUserApi(userId) {
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

function invalidateUserDetails(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.USER_DETAILS, {
    refetchActive,
  });
}

export { deleteUserApi, invalidateUserDetails };
