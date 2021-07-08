import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
// import DistributerService from 'src/services/api/DistributerService'

function queryFn(_, { distributerId }) {
  // return DistributerService.getDetails(distributerId);
}

function buildQueryKey(id) {
  const distributerId = Number(id);

  return [QueryKeys.USER_DETAILS, { distributerId }];
}

export function useDistributerDetails(distributerId) {
  // kept for later distributer
  // const queryKey = buildQueryKey(distributerId);
  // const config = {
  //   staleTime: QUERY_STALE_TIME,
  // };
  // const { status, data, error } = useQuery({ queryKey, queryFn, config });
  // return {
  //   status,
  //   data,
  //   error,
  // };
  // const queryKey = queryCache.find(distributerId);
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
