import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import PakageService from "../../services/api/PakageService";

function queryFn(_,{ params }) {
  return PakageService.getPackageById(params);
}

function buildQueryKey(params) {
  return [QueryKeys.PACKAGES_LIST, { params }];
}

export async function usePackagesList(params) {
  const queryKey = buildQueryKey(params);
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



