export const UsersPermission = {
  READ: 'users_read',
  WRITE: 'users_write',
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
