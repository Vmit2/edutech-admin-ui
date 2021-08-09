import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import PackageService from "../../services/api/PackageService";

function queryFn(_,{ params }) {
  return PackageService.getPackageById(params.id);
}

function buildQueryKey(params) {
  return [QueryKeys.PACKAGES_LIST, { params }];
}

export function usePackagesList({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);
  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

  const  {data} =  useQuery({ queryKey, queryFn, config });

  return data && data.result ? data.result :[]
}

export function invalidateDistributers(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.ALL_USERS, {
    refetchActive,
  });
}



export async function usePackageDetails(userId) {
  try {
    const data = await PackageService.getPackageById(userId);
    data.then((res) => {
      return res;
    });
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
