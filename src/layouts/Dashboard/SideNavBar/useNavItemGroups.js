import compact from 'lodash/compact';
// import intersection from 'lodash/intersection';
import { useMemo } from 'react';
import { navItemGroups } from '../../../config/nav';
// import { useUserState } from 'src/hooks/redux';

export default function useNavItemGroups() {
  // const { activeBusiness } = useUserState()

  const groups = useMemo(() => {
    // Returns true if the user has one of the specified permissions
    // function hasPermission(permissions) {
    //   return intersection(activeBusiness.permissions, permissions).length > 0
    // }

    function filterGroup(group) {
      // const { permissions } = group

      // // Only test the nav group if it is restricted by a permission.
      // if (permissions && !hasPermission(permissions)) {
      //   return null
      // }

      // if (group.children) {
      //   const filtered = compact(group.children.map(filterGroup))

      //   return filtered.length === 0
      //     ? null
      //     : {
      //         ...group,
      //         children: filtered,
      //       }
      // }

      return { ...group }
    }

    return compact(navItemGroups.map(filterGroup))
  }, []) //activeBusiness

  return {
    navItemGroups: groups,
  }
}
