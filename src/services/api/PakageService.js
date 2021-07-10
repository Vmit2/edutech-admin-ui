import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getPackageById(userId) {
  const url = `/package/getPackageByUserId/${userId}`;

  const res = await apiClient.get(url);

  return res;
}

export default {
  getPackageById
};
