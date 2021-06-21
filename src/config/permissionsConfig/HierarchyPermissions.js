export const HierarchyPermissions = {
  READ: 'class_read',
  WRITE: 'class_write',
}

export const hierarchyPermissions = [
  {
    name: HierarchyPermissions.READ,
    roles: [
      'super-admin',
      'admin',
    ],
  },
  {
    name: HierarchyPermissions.WRITE,
    roles: [
      'super-admin',
      'admin',
    ],
  }
]
