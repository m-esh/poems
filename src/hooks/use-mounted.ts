"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True only once mounted on the client — avoids SSR/client markup mismatches. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
