import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import { AuthGuard, PermissionGuard } from "../components/Guards";
import { ReportsPermissions } from "./permissionsConfig/ReportsPermissions";
import { UsersPermission } from "./permissionsConfig/UsersPermission";

/* ===== User Profile ===== */
const Admin = lazy(() => import("../views/Admin/Admin"));
const UsersListView = lazy(() =>
  import("../views/UsersView/usersList/UserListView")
);
const UserDetailsView = lazy(() =>
  import("../views/UsersView/UserDetailsView")
);
const LoginView = lazy(() => import("../views/Login/LoginView"));
const DistributersListView = lazy(() =>
  import("../views/DistributersView/distributersList/DistributersListView")
);
const DistributersDetailsView = lazy(() =>
  import("../views/DistributersView/DistributersDetailsView")
);
const Hierarchy = lazy(() => import("../views/Hierarchy/Hierarchy"));
const NotFoundView = lazy(() => import("../views/Errors/NotFoundView"));

export const routes = [
  {
    path: "login",
    element: (
      // <GuestGuard>
      <LoginView />
      // </GuestGuard>
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
        path: "users/details",
        element: <UserDetailsView />,
      },
      {
        path: "users/add",
        element: <UserDetailsView />,
        path: "distributers",
        element: <DistributersListView />,
      },
      {
        path: "distributers/details",
        element: <DistributersDetailsView />,
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
