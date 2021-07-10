import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import PakageService from "../../services/api/PakageService";

function queryFn(_,{ params }) {
  return PakageService.getPackageById(params);
}

function buildQueryKey(params) {
  return [QueryKeys.ALL_USERS, { params }];
}

export async function getPackageById({ enabled = true, params } = {}) {
  const queryKey = buildQueryKey(params);

  const config = {
    enabled,
    staleTime: QUERY_STALE_TIME,
  };

//   const { status, data, error } =  useQuery({ queryKey, queryFn, config });
//   return {
//     status,
//     data: data && data.data.results,
//     error,
//     count: data && data.data.pagination && data.data.pagination.totalDocs,
//     currentPage: data && data.data.pagination && data.data.pagination.current,
//     nextPage: data && data.data.pagination && data.data.pagination.next,
//     previousPage: data && data.data.pagination && data.data.pagination.previous,
//   };
}



