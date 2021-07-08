import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import DistributerService from "../../services/api/DistributerService";

function queryFn(_,{ params }) {
  return DistributerService.getAll(params);
}

function buildQueryKey(params) {
  return [QueryKeys.ALL_USERS, { params }];
}

export function useDistributers({ enabled = true, params } = {}) {
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
    count: data && data.data.pagination && data.data.pagination.totalPages,
    currentPage: data && data.data.pagination && data.data.pagination.current,
    nextPage: data && data.data.pagination && data.data.pagination.next,
    previousPage: data && data.data.pagination && data.data.pagination.previous,
  };
}

export function invalidateDistributers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}