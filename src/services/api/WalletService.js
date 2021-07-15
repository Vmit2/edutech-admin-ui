import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getWalletById(userId) {
  const url = `/payment/getWalletDetailsByUserId/${userId}`;

  const res = await apiClient.get(url);

  return res.data;
}
export default {
  getWalletById
};
