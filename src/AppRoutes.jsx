import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx";
import { routes } from "./config/routes.jsx";

function AppRoutes() {
  const appRoutes = useRoutes(routes)
  return (
    <Suspense
      fallback={<LoadingScreen />}
    >
      {appRoutes}
    </Suspense>
  );
}

export default AppRoutes;
