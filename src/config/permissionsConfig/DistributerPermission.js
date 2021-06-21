export const DistributerPermission = {
  READ: 'class_read',
  WRITE: 'class_write',
}

export const distributerPermission = [
  {
    name: DistributerPermission.READ,
    roles: [
      'super-admin',
      'admin',
    ],
  },
  {
    name: DistributerPermission.WRITE,
    roles: [
      'super-admin',
      'admin',
    ],
  }
]
