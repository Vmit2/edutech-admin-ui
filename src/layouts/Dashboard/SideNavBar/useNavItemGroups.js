import compact from "lodash/compact";

import { useMemo } from "react";
import { navItemGroups } from "../../../config/nav";

export default function useNavItemGroups() {
  const groups = useMemo(() => {
    function filterGroup(group) {
      return { ...group };
    }

    return compact(navItemGroups.map(filterGroup));
  }, []);

  return {
    navItemGroups: groups,
  };
}
