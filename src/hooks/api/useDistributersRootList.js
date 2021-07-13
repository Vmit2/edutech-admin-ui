import { useDispatch } from "react-redux";
import { addTreeNode } from "../../redux/actions/treeActions";
import DistributerService from "../../services/api/DistributerService";

export async function useRootDistributers() {
  const dispatch = useDispatch();
  try {
    const data = await DistributerService.getRoot();
    dispatch(addTreeNode(data.data.results, true));
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

export async function useChildDistributers({ userId }) {
  const dispatch = useDispatch();
  if (!userId) {
    return null;
  }
  try {
    const data = await DistributerService.getChildsById(userId);
    dispatch(addTreeNode(data.data.result, false , userId));
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
