import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import UserService from "../../services/api/UserService";

function queryFn({ queryKey }) {
  console.log('queryKey ',queryKey[1]['params']);
  return UserService.getAll(queryKey[1]['params']);
}

function buildQueryKey(params) {
  return [QueryKeys.ALL_USERS, { params }];
}

export function useUsers({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });
  return {
    status,
    data: data && data.data.results,
    error,
    count: data && data.data.pagination && data.data.pagination.perPage,
    currentPage: data && data.data.pagination && data.data.pagination.current,
    nextPage: data && data.data.pagination && data.data.pagination.next,
    previousPage: data && data.data.pagination && data.data.pagination.previous,
  };
}

export function invalidateUsers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}
