import pickBy from "lodash/pickBy";

export function urlParamsToApi(urlParams) {
  const { id } = urlParams;
  const apiParams = {
    userId:id,
  };

  return pickBy(apiParams, (p) => !!p);
}
