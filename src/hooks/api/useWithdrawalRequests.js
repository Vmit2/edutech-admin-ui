import { queryCache, useQuery } from "react-query";
import { QueryKeys, QUERY_STALE_TIME } from "../../config/query";
import WithdrawalService from "../../services/api/WithdrawalService";

function queryFn(_, { params }) {
  return WithdrawalService.getAll(params);
}

function buildQueryKey(params) {
  return [QueryKeys.WITHDRAWAL_REQUESTS_LIST, { params }];
}

export function useWithdrawalRequests({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } = useQuery({ queryKey, queryFn, config });
  return {
    status,
    data: data && data.data && data.data.result,
    error,
  };
}

export function invalidateUsers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.WITHDRAWAL_REQUESTS_LIST, {
    refetchActive,
  });
}
