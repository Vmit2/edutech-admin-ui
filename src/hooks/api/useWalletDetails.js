import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import WalletService from "../../services/api/WalletService";

function queryFn(_,) {
  return WalletService.getWallet();
}

function buildQueryKey(params) {
  return [QueryKeys.PACKAGES_LIST, { params }];
}

export async function useWalletList() {
  const queryKey = buildQueryKey();
  const enabled = true ;
  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const { status, data, error } =  useQuery({ queryKey, queryFn, config });
  return {
    status,
    data: data,
    error,
  };
}

export function invalidateDistributers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}



