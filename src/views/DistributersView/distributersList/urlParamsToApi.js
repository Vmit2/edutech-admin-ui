import pickBy from "lodash/pickBy";

export function urlParamsToApi(urlParams) {
  const { page, size, kyc,q } = urlParams;

  const apiParams = {
    page,
    limit: size,
    kyc,
    search: q,
  };

  return pickBy(apiParams, (p) => !!p);
}
