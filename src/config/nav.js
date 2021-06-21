import GroupIcon from '@material-ui/icons/Group';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { UsersPermission } from './permissionsConfig/UsersPermission';
import { DistributerPermission } from './permissionsConfig/DistributerPermission';
import { WithdrawRequestsPermissions } from './permissionsConfig/WithdrawRequestsPermissions';
import { HierarchyPermissions } from './permissionsConfig/HierarchyPermissions';
import { ReportsPermissions } from './permissionsConfig/ReportsPermissions';

export const navItemGroups = [
  {
    key: 'root',
    subheader: '',
    children: [
      {
        title: 'Users',
        href: '/users',
        icon: GroupIcon,
        permissions: [ UsersPermission.WRITE],
      },
      {
        title: 'Distributers',
        href: '/distributers',
        icon:StorefrontIcon,
        permissions: [ DistributerPermission.WRITE],
      },
      {
        title: 'Withdraw Requests',
        href: '/withdraw-requests',
        icon:PaymentIcon,
        permissions: [WithdrawRequestsPermissions.WRITE],
      },
      {
        title: 'Hierarchy',
        href: '/hierarchy',
        icon:AccountTreeIcon,
        permissions: [HierarchyPermissions.WRITE],
      },
      {
        title: 'Reports',
        href: '/reports',
        icon:AssessmentIcon,
        permissions: [ReportsPermissions.WRITE],
      },
    ],
  },
]
