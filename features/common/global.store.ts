import { createStore, withDevTools } from "@poly-state/core";
import { createStoreSelector, useStore } from "@poly-state/react";

type Store = {
  sidebarToggle: boolean;
};

export const globalInital: Store = {
  sidebarToggle: false,
};

export const globalStore = createStore(globalInital);

export const useGlobalStore = () => useStore<Store>(globalStore);
export const useGlobalStoreSelector = createStoreSelector(globalStore);

if (process.env.NODE_ENV === "development") {
  withDevTools(globalStore, "GLOBAL");
}
