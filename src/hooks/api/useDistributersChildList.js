import { queryCache, useQuery } from "react-query";
import { QueryKeys, QUERY_STALE_TIME } from "../../config/query";
import DistributerService from "../../services/api/DistributerService";

function queryFn(_, { params }) {
  let userId = 26;
  if (params.id) {
    userId = params.id;
  }
  return DistributerService.getChildsById(userId);
}

function buildQueryKey(params) {
  return [QueryKeys.CHILD_LIST, { params }];
}

export function useDistributersChildList({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });
  return {
    status,
    data: data && data.data.result,
    error,
  };
}

export function invalidateDistributers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}
