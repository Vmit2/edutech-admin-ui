import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import { AuthGuard, PermissionGuard } from "../components/Guards";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import { ReportsPermissions } from "./permissionsConfig/ReportsPermissions";
import { UsersPermission } from "./permissionsConfig/UsersPermission";
/* ===== User Profile ===== */
const Admin = lazy(() => import("../views/Admin/Admin"));
const UsersListView = lazy(() =>
  import("../views/UsersView/UsersList/UserListView")
);
const UserDetailsView = lazy(() =>
  import("../views/UsersView/userDetails/UserDetailsView")
);
const LoginView = lazy(() => import("../views/Login/LoginView"));
const DistributersListView = lazy(() =>
  import("../views/DistributersView/distributersList/DistributersListView")
);
const DistributersDetailsView = lazy(() =>
  import(
    "../views/DistributersView/distributersDetailsView/DistributersDetailsView"
  )
);
const WithDrawRequestListView = lazy(() =>
  import("../views/WithDrawRequest/RequestList/WithDrawRequestListView")
);
const Hierarchy = lazy(() => import("../views/Hierarchy/Hierarchy"));
const NotFoundView = lazy(() => import("../views/Errors/NotFoundView"));
const PackageDetails = lazy(() =>
  import("../views/UsersView/userDetails/PackageDetails")
);
export const routes = [
  {
    path: "login",
    element: (
      <LoginView />
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        element: <Navigate replace to="users" />,
      },
      {
        path: "reports",
        element: (
          <PermissionGuard
            fallback={<NotFoundView />}
            permissions={[ReportsPermissions.READ, ReportsPermissions.WRITE]}
          >
            <Admin />
          </PermissionGuard>
        ),
      },
      {
        path: "users",
        element: (
          <PermissionGuard
            fallback={<NotFoundView />}
            permissions={[UsersPermission.READ, UsersPermission.WRITE]}
          >
            <UsersListView />
          </PermissionGuard>
        ),
      },
      {
        path: "users/:userId",
        element: <UserDetailsView />,
      },
      {
        path: "users/add",
        element: <UserDetailsView />,
      },
      {
        path: "users/:userId/package",
        element: <PackageDetails />,
      },
      { path: "distributers", element: <DistributersListView /> },
      {
        path: "distributers/:distributerId",
        element: <DistributersDetailsView />,
      },
      {
        path: "withdraw-requests",
        element: <WithDrawRequestListView />,
      },
      {
        path: "hierarchy",
        element: <Hierarchy />,
      },
      {
        path: "*",
        element: <NotFoundView />,
      },
    ],
  },
];
