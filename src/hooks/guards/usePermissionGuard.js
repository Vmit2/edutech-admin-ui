import { useMemo } from "react";
import { useUserState } from "../redux/useUserState";

export function usePermissionGuard(...permissions) {
  const permissionsRules = {
    admin: ["reports_read", "reports_write", "users_read", "users_write"],
    superAdmin: ["reports_read", "reports_write", "users_read", "users_write"],
  };
  const { details } = useUserState();
  const { role } = details;
  const hasPermission = useMemo(
    () =>
      permissionsRules[role].filter((value) => permissions.includes(value))
        .length > 0,
    [role, permissions]
  );

  return { hasPermission };
}
