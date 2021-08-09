import pickBy from "lodash/pickBy";

export function urlParamsToApi(urlParams) {
  const { page, size, kyc } = urlParams;

  const apiParams = {
    page,
    limit: size,
    kyc,
  };

  return pickBy(apiParams, (p) => !!p);
}
