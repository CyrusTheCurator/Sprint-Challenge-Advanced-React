import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export function useSafeMode(key, initialState) {
  const [safeMode, setSafeMode] = useLocalStorage(key, initialState);

  useEffect(() => {
    safeMode
      ? document.body.classList.add(key)
      : document.body.classList.remove(key);
  }, [safeMode]);

  return [safeMode, setSafeMode];
}
