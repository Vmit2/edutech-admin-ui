import { apiClient } from "../apiClient";
import { translateUser } from "./translators/translateUser";

async function uploadPancard(userId,data) {
  const url = `/photo/${userId}/uploadPancardPhoto`;
  const res = apiClient.get(url,data);
  return res;
}

async function uploadAddharFront(userId,data) {
    const url = `/photo/${userId}/uploadAadhaarFrontPhoto`;
    const res = apiClient.get(url,data);
    return res;
}

async function uploadAddharBack(userId,data) {
    const url = `/photo/${userId}/uploadAadhaarBackPhoto`;
    const res = apiClient.get(url,data);
    return res;
}

export default {
    uploadPancard,uploadAddharFront, uploadAddharBack
};
