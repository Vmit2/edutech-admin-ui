import pickBy from "lodash/pickBy";
import { useState } from "react";

export function useUrlParams() {
  const [urlParams, setUrlParam] = useState({});

  const setUrlParams = (params) => {
    const newParams = {
      ...urlParams,
      ...params,
    };
    setUrlParam(pickBy(newParams, (p) => !!p));
  };

  return {
    urlParams,
    setUrlParams,
  };
}
