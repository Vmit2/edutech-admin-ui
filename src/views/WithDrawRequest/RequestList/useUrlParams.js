import pickBy from "lodash/pickBy";
import { useSearchParams } from "react-router-dom";
import { KYCStatus } from "../../../config/constants";
import { parseKycStatus } from "../../../utils/url/parseKycStatus";
import { parsePage, parsePageSize } from "../../../utils/url/parsePage";

export function useUrlParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParams = {
    page: parsePage(searchParams),
    size: parsePageSize(searchParams),
    kyc: parseKycStatus(searchParams) || KYCStatus.COMPLETED,
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
