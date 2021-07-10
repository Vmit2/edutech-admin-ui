import pickBy from "lodash/pickBy";

export function urlParamsToApiForChildTree(urlParams) {
  const { id } = urlParams;

  const apiParams = {
    id
  };

  return pickBy(apiParams, (p) => !!p);
}
