import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getWallet() {
  const url = `/wallet/getAllWalletRequestForAdmin`;

  const res = await apiClient.get(url);

  return res;
}

export default {
  getWallet
};
