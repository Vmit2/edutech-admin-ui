import { Link } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PrimaryButton } from "../../components/Buttons";
import PlusCircleIcon from "../../components/Icons/PlusCircleIcon";
import ListSummaryBar from "../../components/ListSummaryBar/ListSummaryBar";
import LoadingProgress from "../../components/LoadingProgress/LoadingProgress";
import TabPanelComponent from "../../components/Tabs/TabPanelComponent";
import { useUsers } from "../../hooks/api/useUsers";
import { useUrlParams } from "../../hooks/useUrlParams";
import DashboardPage from "../../layouts/Dashboard/DashboardPage";
import { parsePage, parsePageSize } from "../../utils/url/parsePage";
import NonVerified from "./NonVerified";
import { urlParamsToApi } from "./urlParamsToApi";
import Verified from "./Verified";

const UserListView = () => {
  const title = "Users";

  const { urlParams, setUrlParam } = useUrlParams({
    parseUrlParams: (searchParams) => ({
      page: parsePage(searchParams),
      limit: parsePageSize(searchParams),
    }),
  });
  const response = useUsers({
    params: urlParamsToApi(urlParams),
  });
  // const users = response.data;
  const isLoading = response.status === "loading";

  return (
    <DashboardPage documentTitle={title} pageTitle={title}>
      <ListSummaryBar
        action={
          // hasWritePermission ? (
          <Link component={RouterLink} to="add" underline="none">
            <PrimaryButton component="div" startIcon={<PlusCircleIcon />}>
              Add New User
            </PrimaryButton>
          </Link>
          // ) : null
        }
        // count={users.data && users.data.length}
        // totalCount={users.count}
      />

      {isLoading && <LoadingProgress />}
      <TabPanelComponent
        tabData={[
          {
            title: "Verified Users",
            item: (
              <Verified completeData={response} setUrlParam={setUrlParam} />
            ),
          },
          // { title: "Non Verified Users", item: <NonVerified tableData={response} /> },
        ]}
      />
    </DashboardPage>
  );
};

export default UserListView;
