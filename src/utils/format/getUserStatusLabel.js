import { ActiveStatus } from '../../config/constants'

export function getUserStatusLabel(value) {
  switch (value) {
    case ActiveStatus.ACTIVE:
      return "Active"

    case ActiveStatus.INACTIVE:
      return "Inactive"

    case ActiveStatus.BOTH:
      return "Both"

    default:
      return ''
  }
}
