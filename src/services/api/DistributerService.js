import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getAll(qParams = {}) {
  const url = `/admin/getAllDistributors`;
  const params = {
    ...qParams,
  };
  const res = apiClient.get(url, { params });
  return res;
}

async function getAllByKyc(qParams = {}, kycFlag) {
  const url = `/admin/getAllDistributorsByKyc/${kycFlag}`;
  const params = {
    limit: qParams.limit,
    page: qParams.page,
  };
  const res = apiClient.get(url, { params });
  return res;
}

async function getById(userId) {
  const url = `/users/${userId}`;

  const res = await apiClient.get(url);

  return translateUser(res.data);
}

async function create(body) {
  const url = `/users`;

  const res = await apiClient.post(url, body);

  return translateUser(res.data);
}

async function update(userId, body) {
  const url = `/users/${userId}`;

  const res = await apiClient.put(url, body);

  return translateUser(res.data);
}

async function updateKyc(distributerId) {
  const url = `/admin/distributorKycApproval/${distributerId}`;

  const res = await apiClient.put(url);

  return res;
}


export default {
  getAll,
  getAllByKyc,
  getById,
  create,
  update,
  updateKyc
};
