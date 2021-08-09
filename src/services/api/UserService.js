import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getAll(qParams = {}) {
  const url = `/admin/getAllUsers`;
  const params = {
    ...qParams,
  };
  const res = apiClient.get(url, { params });
  return res;
}

async function getAllByKyc(qParams = {}, kycFlag) {
  const url = `/admin/getAllUsersByKyc/${kycFlag}`;
  const params = {
    limit: qParams.limit,
    page: qParams.page,
  };
  const res = apiClient.get(url, { params });
  return res;
}

async function getUserById(id) {
  const url = `/admin/getUserById/${id}`;
  const res = apiClient.get(url);
  return res;
}

async function searchAll(qParams = {}) {
  const search = qParams.search;
  const url = `/admin/searchAllUsers?searchKey=${search}`;
  const params = {};
  const res = apiClient.get(url, { params });
  return res;
}

async function create(body) {
  const url = `/users`;

  const res = await apiClient.post(url, body);

  return translateUser(res.data);
}

async function updateKyc(userId) {
  const url = `/admin/userKycApproval/${userId}`;

  const res = await apiClient.put(url);

  return res;
}

async function deleteUser(userId) {
  const url = `/admin/deleteUser?userId=${userId}`;

  const res = await apiClient.put(url);

  return res;
}

async function getPackageById(userId) {
  const url = `/package/getPackageByUserId/${userId}`;

  const res = await apiClient.get(url);

  return res;
}

export default {
  getAll,
  getAllByKyc,
  create,
  updateKyc,
  getPackageById,
  deleteUser,
  searchAll,
  getUserById
};
