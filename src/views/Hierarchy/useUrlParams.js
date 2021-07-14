import pickBy from "lodash/pickBy";
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { parseSearchTerm } from "../../utils/url/parseSearchTerm";

export function useUrlParams() {
  const [urlParams, setUrlParam] = useState({});
  // const urlParams = {
  //   id: parseSearchTerm(searchParams) || "",
  // };
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
