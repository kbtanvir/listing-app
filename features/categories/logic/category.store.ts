import { createStore, withDevTools } from "@poly-state/core";
import { useStore } from "@poly-state/react";
import { defaultQueryOptions } from "../../../lib/types/network";

import { CategoryEntity } from "../data/category.enitity";

export const initialState: CategoryEntity.Store = {
  list: [],
  queryOptions: {
    ...defaultQueryOptions,
    collection: "categories",
  },
  selectedIds: [],
};

export const categoryStore = createStore(initialState);

export const useCategoryStore = () =>
  useStore<CategoryEntity.Store>(categoryStore);

if (process.env.NODE_ENV === "development") {
  withDevTools(categoryStore, "CATEGORIES");
}
