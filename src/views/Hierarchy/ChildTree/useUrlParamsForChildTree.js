import { useState } from "react";

export function useUrlParamsForChildTree() {
  const [urlParamsForChild, setId] = useState({});

  const setUrlParamForChild = (key, value) => {
    setId({
      [key]: value,
    });
  };

  return {
    urlParamsForChild,
    setUrlParamForChild,
  };
}
