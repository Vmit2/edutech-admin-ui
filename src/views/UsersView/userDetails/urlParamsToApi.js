import pickBy from "lodash/pickBy";

export function urlParamsToApi(urlParams) {
  const { id } = urlParams;

  const apiParams = {
    id: id,
  };

  return pickBy(apiParams, (p) => !!p);
}
