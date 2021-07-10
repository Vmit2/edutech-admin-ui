import pickBy from "lodash/pickBy";

export function urlParamsToApi(urlParams) {
  const { page, size } = urlParams;

  const apiParams = {
    page,
    limit: size,
  };

  return pickBy(apiParams, (p) => !!p);
}
