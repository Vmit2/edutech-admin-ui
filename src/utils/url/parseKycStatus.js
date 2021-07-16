import { KYCStatus } from "../../config/constants"


export function parseKycStatus(params, key = 'kyc') {
  const value = params.get(key)
  const isValid = Object.values(KYCStatus).includes(value)

  return isValid ? value : null
}
