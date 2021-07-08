import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
// import UserService from 'src/services/api/UserService'

function queryFn(_, { userId }) {
  // return UserService.getDetails(userId);
}

function buildQueryKey(id) {
  const userId = Number(id);

  return [QueryKeys.USER_DETAILS, { userId }];
}

export function useUserDetails(userId) {
  // kept for later user
  // const queryKey = buildQueryKey(userId);
  // const config = {
  //   staleTime: QUERY_STALE_TIME,
  // };
  // const { status, data, error } = useQuery({ queryKey, queryFn, config });
  // return {
  //   status,
  //   data,
  //   error,
  // };
  // const queryKey = queryCache.find(userId);
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

export function removeUserDetails(userId) {
  const queryKey = buildQueryKey(userId);

  queryCache.removeQueries(queryKey);
}
