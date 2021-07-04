/**
 * Asynchronously fetches all pages of data for the given request.
 *
 * The given queryFn is assumed to resolve a paginated response.
 */
export async function getAllPages({ queryFn, pageSize }) {
  const perPage = pageSize || 100
  let hasMorePages = true
  let page = 1
  let data = []

  while (hasMorePages) {
    // eslint-disable-next-line no-await-in-loop
    const res = await queryFn({ page, per_page: perPage })
    const { records, total_pages: totalPages } = res.data

    data = data.concat(records)

    if (totalPages !== 0 && page !== totalPages) {
      page += 1
    } else {
      hasMorePages = false
    }
  }

  return data
}
