import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function getAll(qParams = {}) {
  const url = `/admin/getAllUsers`;
  // const queryFn = (queryParams) => {
  const params = {
    // sort: 'name:asc',
    ...qParams,
    // ...queryParams,
  };

  // const queryFn = (queryParams) => {
  //   const params = {
  //     ...qParams,
  //     ...queryParams,
  //   };
  //   return apiClient.get(url, { params });
  // };
  // const res = await getAll({ queryFn });
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

export default {
  getAll,
  getById,
  create,
  update,
};
