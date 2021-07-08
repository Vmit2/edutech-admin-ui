import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import HorizontalTabs from "../../../components/HorizontalTabs";
import PlusCircleIcon from "../../../components/Icons/PlusCircleIcon";
import { ActiveStatus } from "../../../config/constants";
import { useDistributers } from "../../../hooks/api/useDistributers";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import DistributersTable from "./table/DistributersTable";
import { urlParamsToApi } from "./urlParamsToApi";
import { useUrlParams } from "./useUrlParams";

function DistributersListView() {
  const title = "Manage Distributers";

  const { urlParams, setUrlParams } = useUrlParams();

  const distributersDetails = useDistributers({
    params: urlParamsToApi(urlParams),
  });

  const isLoading =
    distributersDetails.status === "idle" || distributersDetails.status === "loading";

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
    <DashboardPage
      action={
        // hasWritePermission ? (
        <Box mb={2}>
          <Link component={RouterLink} to="add">
            <Button
              color="secondary"
              startIcon={<PlusCircleIcon />}
              variant="contained"
            >
              {"Add New Equipmen"}
            </Button>
          </Link>
        </Box>
        // ) : null
      }
      documentTitle={title}
      pageTitle={title}
    >
      <Card>
        <HorizontalTabs
          items={[
            { value: ActiveStatus.COMPLETED, label: "KYC Completed" },
            { value: ActiveStatus.NOT_COMPLETED, label: "KYC Not Completed" },,
          ]}
          value={urlParams.kyc}
          onChange={(event, value) => setUrlParam("kyc", value)}
        />
        <Divider />

        <DistributersTable
          count={distributersDetails.count}
          data={distributersDetails.data}
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

export default DistributersListView;
