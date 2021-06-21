export const UsersPermission = {
  READ: 'class_read',
  WRITE: 'class_write',
}

export const usersPermission = [
  {
    name: UsersPermission.READ,
    roles: [
      'super-admin',
      'admin',
    ],
  },
  {
    name: UsersPermission.WRITE,
    roles: [
      'super-admin',
      'admin',
    ],
  }
]
