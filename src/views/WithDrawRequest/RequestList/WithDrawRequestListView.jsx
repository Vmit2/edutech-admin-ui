import Card from "@material-ui/core/Card";
import React from "react";
import { useUsers } from "../../../hooks/api/useUsers";
import { useWithdrawalRequests } from "../../../hooks/api/useWithdrawalRequests";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import WithDrawTable from "./table/WithDrawTable";
import { urlParamsToApi } from "./urlParamsToApi";
import { useUrlParams } from "./useUrlParams";

function WithDrawRequestListView() {
  const title = "Withdraw Requests";

  const { urlParams, setUrlParams } = useUrlParams();

  const userDetails = useUsers({
    params: urlParamsToApi(urlParams),
  });
  const { status, data, error } = useWithdrawalRequests();
  console.log("withdrawal requests ", data);

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

  const setSort = (sort, dir) => {
    // setUrlParams({
    //   sort,
    //   dir,
    // });
  };

  return (
    <DashboardPage pageTitle={title}>
      <Card>
        <WithDrawTable
          count={userDetails.count}
          data={data}
          isLoading={isLoading}
          page={urlParams.page}
          pageSize={urlParams.size}
          // sort={urlParams.sort}
          // sortDirection={urlParams.dir}
          onPageChange={setPage}
          onSortChange={setSort}
        />
      </Card>
    </DashboardPage>
  );
}

export default WithDrawRequestListView;
