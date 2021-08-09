import flow from "lodash/fp/flow";
import mapValuesFp from "lodash/fp/mapValues";
import pickByFp from "lodash/fp/pickBy";
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";
import { useSearchParams } from "react-router-dom";

export function useUrlParams({ parseUrlParams }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlParams = parseUrlParams(searchParams);

  const setUrlParams = (params) => {
    const transform = flow(
      mapValuesFp((value) =>
        Array.isArray(value) ? sortBy(value).join(",") : value
      ),
      pickByFp((value) => !!value)
    );

    const newParams = transform({
      ...urlParams,
      ...params,
    });

    setSearchParams(newParams);
  };

  const setUrlParam = (key, value) => {
    // Prevent navigating to a new url if the value didn't change.
    // Use lodash.isEqual() for deep equality of arrays.
    if (isEqual(urlParams[key], value)) {
      return;
    }

    setUrlParams({
      page: 1,
      [key]: value,
    });
  };

  return {
    urlParams,
    setUrlParam,
    setUrlParams,
  };
}
