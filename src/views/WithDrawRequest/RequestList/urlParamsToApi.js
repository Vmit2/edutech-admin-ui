import pickBy from "lodash/pickBy";

export function urlParamsToApi(urlParams) {
  const { page, size, kyc } = urlParams;

  const apiParams = {
    page,
    limit: size,
    kyc,
    // search: q,
    // sort: buildSort(),
  };

  return pickBy(apiParams, (p) => !!p);
}
