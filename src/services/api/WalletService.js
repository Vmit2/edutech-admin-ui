import { apiClient } from "../apiClient";

async function getWalletById(userId) {
  const url = `/payment/getWalletDetailsByUserId/${userId}`;

  const res = await apiClient.get(url);

  return res.data;
}
async function updateWalletStatus(userId, status) {
  const url = `/wallet/blockOrUnblockWalletByUserIdForAdminPanel/${userId}/${status}`;

  const res = await apiClient.get(url);

  return res.data;
}
export default {
  getWalletById,
  updateWalletStatus,
};
