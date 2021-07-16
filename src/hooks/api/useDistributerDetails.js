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

async function deleteDistributerApi(id) {
  try {
    const data = await DistributerService.deleteDistributer(id);
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

export function removeDistributerDetails(distributerId) {
  const queryKey = buildQueryKey(distributerId);

  queryCache.removeQueries(queryKey);
}

export { deleteDistributerApi };
