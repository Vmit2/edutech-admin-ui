export const ReportsPermissions = {
  READ: 'reports_read',
  WRITE: 'reports_write',
}

export const reportsPermissions = [
  {
    name: ReportsPermissions.READ,
    roles: [
      'super-admin',
      'admin',
    ],
  },
  {
    name: ReportsPermissions.WRITE,
    roles: [
      'super-admin',
      'admin',
    ],
  }
]
