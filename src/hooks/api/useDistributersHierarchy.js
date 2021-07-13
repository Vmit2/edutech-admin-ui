import { queryCache, useQuery } from "react-query";
import { QueryKeys, QUERY_STALE_TIME } from "../../config/query";
import DistributerService from "../../services/api/DistributerService";

function queryFn(_, { params }) {
  return DistributerService.getRoot(params);
}

function buildQueryKey(params) {
  return [QueryKeys.ROOT_DISTRIBUTER, { params }];
}

export function useDistributersHierarchy({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });
  return {
    status,
    data: data && [data.data.results[0]],
    error,
  };
}

export function invalidateDistributers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}
