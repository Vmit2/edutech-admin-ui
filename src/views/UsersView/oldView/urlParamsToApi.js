
export function urlParamsToApi(urlParams) {
  const { page, limit} = urlParams;
  return {
    page,
    limit
  }
}
