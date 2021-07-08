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
import { useUsers } from "../../../hooks/api/useUsers";
// import { ActiveStatus } from "src/config/constants";
// import { EquipmentPermissions } from "src/config/permissionsConfig/equipmentPermissions";
// import { useAllLocations } from "src/hooks/api/useAllLocations";
// import { useUser } from "../../../hooks/api/useUser";
// import { usePermissionGuard } from "src/hooks/guards";
// import { useUserState } from "src/hooks/redux";
import DashboardPage from "../../../layouts/Dashboard/DashboardPage";
import UserTable from "./table/UserTable";
import { urlParamsToApi } from "./urlParamsToApi";
import { useUrlParams } from "./useUrlParams";

function UsersListView() {
  const title = "Manage Users";

  // const { activeBusiness } = useUserState();
  // const locations = useAllLocations(activeBusiness.id);
  const { urlParams, setUrlParams } = useUrlParams();

  const userDetails = useUsers({
    params: urlParamsToApi(urlParams),
  });
  // const { hasPermission: hasWritePermission } = usePermissionGuard(
  //   EquipmentPermissions.WRITE
  // );

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

        <UserTable
          count={userDetails.count}
          data={userDetails.data}
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

export default UsersListView;
