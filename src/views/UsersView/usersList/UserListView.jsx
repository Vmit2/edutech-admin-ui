import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import HorizontalTabs from "../../../components/HorizontalTabs";
import PlusCircleIcon from "../../../components/Icons/PlusCircleIcon";
import ListSummaryBar from "../../../components/ListSummaryBar";
import { ActiveStatus, KYCStatus } from "../../../config/constants";
import { useUsers } from "../../../hooks/api/useUsers";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import { parseActiveStatus } from "../../../utils/url/parseActiveStatus";
import { parseKycStatus } from "../../../utils/url/parseKycStatus";
import { parsePage, parsePageSize } from "../../../utils/url/parsePage";
import { parseSearchTerm } from "../../../utils/url/parseSearchTerm";
import UserTable from "./table/UserTable";
import { urlParamsToApi } from "./urlParamsToApi";
import UsersFilterBar from "./UsersFilterBar";
import { useUrlParams } from "./useUrlParams";
function UsersListView() {
  const title = "Manage Users";

  const { urlParams, setUrlParams } = useUrlParams({
    parseUrlParams: (searchParams) => ({
      page: parsePage(searchParams),
      size: parsePageSize(searchParams),
      kyc: parseKycStatus(searchParams) || KYCStatus.COMPLETED,
      q: parseSearchTerm(searchParams) || "",
      status: parseActiveStatus(searchParams) || ActiveStatus.BOTH,
    }),
  });
  const [searchValue, setValue] = useState("");
  const userDetails = useUsers({
    params: urlParamsToApi(urlParams),
  });

  const isLoading =
    userDetails.status === "idle" || userDetails.status === "loading";

  const setUrlParam = (key, value) => {
    if (urlParams[key] === value) {
      return;
    }

    setUrlParams({
      page: 1,
      [key]: value,
    });
  };

  const setPage = (page, size) => {
    setUrlParams({
      page,
      size,
    });
  };
  const onChange = (e) => {
    setValue(e.target.value);
    setUrlParam("kyc", KYCStatus.COMPLETED);
    if (e.target.value && e.target.value.length > 0) {
      setUrlParam("q", e.target.value);
      setUrlParam("status", ActiveStatus.BOTH);
    } else {
      setUrlParam("q", "");
      setUrlParam("status", ActiveStatus.BOTH);
    }
  };
  const onBlur = () => {};
  return (
    <DashboardPage documentTitle={title} pageTitle={title}>
      <ListSummaryBar
        action={
          <Link component={RouterLink} to="add" underline="none">
            <PrimaryButton component="div" startIcon={<PlusCircleIcon />}>
              Add New User
            </PrimaryButton>
          </Link>
        }
      />
      <UsersFilterBar
        value={searchValue}
        onBlur={onBlur}
        onChange={onChange}
        urlParams={urlParams}
        setUrlParam={setUrlParam}
      />
      <Card>
        <HorizontalTabs
          items={[
            { value: KYCStatus.COMPLETED, label: "KYC Completed" },
            { value: KYCStatus.NOT_COMPLETED, label: "KYC Not Completed" },
            ,
          ]}
          value={urlParams.kyc}
          onChange={(event, value) => setUrlParam("kyc", value)}
        />
        <Divider />

        <UserTable
          count={userDetails.count}
          data={userDetails.data}
          isLoading={isLoading}
          page={urlParams.page}
          pageSize={urlParams.size}
          // sort={urlParams.sort}
          // sortDirection={urlParams.dir}
          onPageChange={setPage}
          // onSortChange={setSort}
          statusUrlParams={urlParams}
        />
      </Card>
    </DashboardPage>
  );
}

export default UsersListView;
