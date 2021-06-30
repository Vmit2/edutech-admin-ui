import { useQuery } from 'react-query'
import { QUERY_STALE_TIME, QueryKeys } from 'src/config/query'
import ClientService from 'src/services/api/ClientService'

function queryFn(_, { businessId, params }) {
  const qParams = {
    ...params,
    page: 1,
    per_page: 5,
  }

  return ClientService.getForBusiness(businessId, qParams)
}

function buildQueryKey(businessId, params) {
  return [QueryKeys.CLIENT_AUTOCOMPLETE, { businessId, params }]
}

export function useClientAutocomplete(businessId, { params, ...queryConfig }) {
  const queryKey = buildQueryKey(businessId, params)
  const config = {
    staleTime: QUERY_STALE_TIME,
    ...queryConfig,
  }

  const { status, data, error } = useQuery({ queryKey, queryFn, config })

  return {
    status,
    data: data && data.records,
    error,
    count: data && data.total_count,
    totalPages: data && data.total_pages,
  }
}
