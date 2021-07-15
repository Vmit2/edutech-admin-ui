import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import DistributerService from "../../services/api/DistributerService";

function queryFn(_, { params }) {
  return DistributerService.getDistributerById(params);
}

function buildQueryKey(params) {
  return [QueryKeys.DISTRIBUTER_DETAILS, { params }];
}

export function useDistributerDetails(id) {
  const enabled = true;
  const queryKey = buildQueryKey(id);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });
  return {
    status,
    distResponse: data && data.data.result && data.data.result[0],
    error,
  };
}

export function getDistributerDetails(distributerId) {
  const queryKey = buildQueryKey(distributerId);
  const queryData = queryCache.getQueryData(queryKey);
}

export function setDistributerDetails(distributerId, data, opts = {}) {
  const queryKey = buildQueryKey(distributerId);
  const config = {
    staleTime: QUERY_STALE_TIME,
    ...opts,
  };

  queryCache.setQueryData(queryKey, data, config);
}

export function removeDistributerDetails(distributerId) {
  const queryKey = buildQueryKey(distributerId);

  queryCache.removeQueries(queryKey);
}
