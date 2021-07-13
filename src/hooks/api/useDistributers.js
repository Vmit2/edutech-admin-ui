import { queryCache, useQuery } from "react-query";
import { ActiveStatus } from "../../config/constants";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import DistributerService from "../../services/api/DistributerService";

function queryFn(_,{ params }) {
  if (params.search && params.search.length > 0) {
    return DistributerService.searchAll(params);
  } else {
    const kycFlag = params && params.kyc === ActiveStatus.COMPLETED ? 1 : 0;
    return DistributerService.getAllByKyc(params, kycFlag);
  }
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
    count: data && data.data.pagination && data.data.pagination.totalDocs,
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

export async function updateKyc(distributerId) {
  try {
    const data = await DistributerService.updateKyc(distributerId);

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