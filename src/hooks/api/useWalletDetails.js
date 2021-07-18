import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import WalletService from "../../services/api/WalletService";

function queryFn(_, { params }) {
  return WalletService.getWalletById(params.id);
}

function buildQueryKey(params) {
  return [QueryKeys.DIST_WALLET_DETAILS, { params }];
}

export function useWalletList({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);
  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };
  const { data } = useQuery({ queryKey, queryFn, config });
  return data && data.result;
}

export async function updateWalletStatus(distributerId, status) {
  try {
    const data = await WalletService.updateWalletStatus(distributerId, status);

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

export function invalidateWallet(opts = {}) {
  const { refetchActive } = opts;

  return queryCache.invalidateQueries(QueryKeys.DIST_WALLET_DETAILS, {
    refetchActive,
  });
}
