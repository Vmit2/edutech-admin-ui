import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getAll(qParams = {}) {
  const url = `/wallet/getAllWalletRequestForAdmin`;
  const params = {
    ...qParams,
  };
  const res = apiClient.get(url, { params });
  return res;
}

async function approveWithDrawRequest(data) {
  const url = `/wallet/makeWireTransferFromAdmin`;
  const body = {
    "userId": data.user_id,
    "uniqueRequestNumber": data.unique_request_number,
    "beneficiaryType": data.beneficiary_type,
    "beneficiaryName": data.beneficiary_name,
    "accountNumber": data.account_number,
    "ifsc": data.ifsc,
    "upiHandle": data.upi_handle,
    "paymentMode": data.payment_mode,
    "amount": data.amount,
    "email": data.email,
    "phoneNumber": data.phone,
    "narration": data.narration
  }
  const res = await apiClient.post(url, body);

  return res;
}

export default {
  getAll,
  approveWithDrawRequest
};
