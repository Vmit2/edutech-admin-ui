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
const Admin = lazy(() => import('../views/Admin/Admin'));
const LoginView = lazy(() => import('../views/Login/LoginView'));
const Hierarchy = lazy(() => import('../views/Hierarchy/Hierarchy'));
const NotFoundView = lazy(() => import('../views/Errors/NotFoundView'));

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
        element: <Admin />,
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
