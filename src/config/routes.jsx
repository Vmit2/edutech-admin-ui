import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
// {
//   /* </BusinessSelectGuard> */
// }
// // </AuthGuard>
//  // <AuthGuard>
//         {/* <BusinessSelectGuard> */}

/* ===== User Profile ===== */
const Admin = lazy(() => import("../views/Admin/Admin"));
const UsersListView = lazy(() => import("../views/UsersView/UserListView"));
const UserDetailsView = lazy(() => import("../views/UsersView/UserDetailsView"));
const LoginView = lazy(() => import("../views/Login/LoginView"));
const DistributersListView = lazy(() => import("../views/DistributersView/DistributersListView"));
const DistributersDetailsView = lazy(() => import("../views/DistributersView/DistributersDetailsView"));
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
    element: <DashboardLayout />,
    children: [
      {
        element: <Navigate replace to="users" />,
      },
      {
        path: "reports",
        element: (
          // <PermissionGuard
          //   fallback={<NotFoundView />}
          //   permissions={[PackagePermissions.READ]}
          // >
          <Admin />
          // </PermissionGuard>
        ),
      },
      {
        path: "users",
        element: <UsersListView />,
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
