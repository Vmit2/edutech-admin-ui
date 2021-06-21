export const WithdrawRequestsPermissions = {
  READ: 'class_read',
  WRITE: 'class_write',
}

export const withdrawRequestsPermissions = [
  {
    name: WithdrawRequestsPermissions.READ,
    roles: [
      'super-admin',
      'admin',
    ],
  },
  {
    name: WithdrawRequestsPermissions.WRITE,
    roles: [
      'super-admin',
      'admin',
    ],
  }
]
