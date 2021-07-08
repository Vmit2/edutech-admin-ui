import { ActiveStatus } from "../../config/constants"


export function parseActiveStatus(params, key = 'kyc') {
  const value = params.get(key)
  const isValid = Object.values(ActiveStatus).includes(value)

  return isValid ? value : null
}
