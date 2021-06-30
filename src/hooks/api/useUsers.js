import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import UserService from "../../services/api/UserService";

function queryFn() {
  return UserService.getAll();
}

function buildQueryKey() {
  return [QueryKeys.ALL_USERS];
}

export function useUsers({ enabled = true } = {}) {
  const queryKey = buildQueryKey();
  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });

  return {
    status,
    data: data && data.data && data.data.data,
    error,
    // count: data && data.total_count,
    // totalPages: data && data.total_pages,
  };
}

export function invalidateUsers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}
