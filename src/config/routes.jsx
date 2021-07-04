import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import KycDetailsTab from "../views/DistributersView/KycDetailsTab";
import KycDetailsView from "../views/DistributersView/KycDetailsView";
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
// const KycDetailsTab = lazy(() => import("../views/DistributersView/KycDetailsTab"));
// const KycDetailsView = lazy(() => import("../views/DistributersView/KycDetailsView"));
const Login = lazy(() => import("../views/Login/Login"));
const Hierarchy = lazy(() => import("../views/Hierarchy/Hierarchy"));
const NotFoundView = lazy(() => import("../views/Errors/NotFoundView"));

export const routes = [
  {
    path: "login",
    element: (
      // <GuestGuard>
      <Login />
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
        path: "distributers",
        element: <KycDetailsTab />,
      },
      {
        path: "distributers/details",
        element: <KycDetailsView />,
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
