import { queryCache, useQuery } from "react-query";
import { QUERY_STALE_TIME, QueryKeys } from "../../config/query";
import UploadService from "../../services/api/UploadService";

export async function uploadAddharBack(userId,file) {
    const formData = new FormData();
    formData.append('image', file);
  try {
    const data = await UploadService.uploadAddharBack(userId,formData)

    return {
      error: false,
      data,
    };
  } catch (err) {
    const apiErrorMessage = err.edutechError
      ? err.error.response.data.message
      : "An unexpected error occurred. Please try again.";

    return {
      error: true,
      apiErrorMessage,
    };
  }
}

export async function uploadAddharFront(userId,file) {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const data = await UploadService.uploadAddharFront(userId,formData)
  
      return {
        error: false,
        data,
      };
    } catch (err) {
      const apiErrorMessage = err.edutechError
        ? err.error.response.data.message
        : "An unexpected error occurred. Please try again.";
  
      return {
        error: true,
        apiErrorMessage,
      };
    }
  }

  export async function uploadPancard(userId,file) {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const data = await UploadService.uploadPancard(userId,formData)
  
      return {
        error: false,
        data,
      };
    } catch (err) {
      const apiErrorMessage = err.edutechError
        ? err.error.response.data.message
        : "An unexpected error occurred. Please try again.";
  
      return {
        error: true,
        apiErrorMessage,
      };
    }
  }
