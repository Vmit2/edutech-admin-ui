import pickBy from "lodash/pickBy";
import { useSearchParams } from "react-router-dom";
import { ActiveStatus } from "../../../config/constants";
import { parseActiveStatus } from "../../../utils/url/parseActiveStatus";
import { parsePage, parsePageSize } from "../../../utils/url/parsePage";
import { parseSearchTerm } from "../../../utils/url/parseSearchTerm";

export function useUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParams = {
    page: parsePage(searchParams),
    size: parsePageSize(searchParams),
    kyc: parseActiveStatus(searchParams) || ActiveStatus.COMPLETED,
    q: parseSearchTerm(searchParams) || '',
  };
  const setUrlParams = (params) => {
    const newParams = {
      ...urlParams,
      ...params,
    };

    if (!newParams.sort) {
      delete newParams.dir;
    }

    setSearchParams(pickBy(newParams, (p) => !!p));
  };

  return {
    urlParams,
    setUrlParams,
  };
}
