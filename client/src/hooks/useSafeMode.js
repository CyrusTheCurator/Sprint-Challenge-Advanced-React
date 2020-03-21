import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useSafeMode(key, initialState) {
  const [safeMode, setSafeMode] = useLocalStorage(key, initialState);

  useEffect(() => {
    safeMode
      ? document.body.classList.add("safeMode")
      : document.body.classList.remove("safeMode");
  }, [safeMode]);

  return [safeMode, setSafeMode];
}
