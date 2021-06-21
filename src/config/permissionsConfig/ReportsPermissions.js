export const ReportsPermissions = {
  READ: 'class_read',
  WRITE: 'class_write',
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
