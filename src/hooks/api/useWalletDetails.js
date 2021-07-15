import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import WalletService from "../../services/api/WalletService";


function queryFn(_,{ params }) {
  return WalletService.getWalletById(params.id);
}

function buildQueryKey(params) {
  return [QueryKeys.PACKAGES_LIST, { params }];
}

export function useWalletList({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);
  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };
  const {data} =  useQuery({ queryKey, queryFn, config });
  return data
}

