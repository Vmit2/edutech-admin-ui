import { apiClient } from "../apiClient";

async function getPackageById(userId) {
  const url = `/package/getPackageByUserId/${userId}`;

  const res = await apiClient.get(url);

  return res.data;
}

export default {
  getPackageById
};
