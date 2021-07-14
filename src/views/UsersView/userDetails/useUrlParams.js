import { useParams } from "react-router-dom";

export function useUrlParams() {
  const { userId } = useParams();
  const urlParams = {
    id: userId || "",
  };

  return {
    urlParams,
  };
}
