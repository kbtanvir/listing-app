import { Timestamp } from "firebase/firestore";

import { nanoid } from "nanoid";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import { APIResponse } from "../../../lib/types/network";
import httpService from "../../auth/logic/services/axios.interceptor";
import { CategoryEntity } from "../data/category.enitity";
import { categoryStore } from "./category.store";

const collectionName = AppRoutes.Category.collection;

export class CategoryService {
  constructor(private state = categoryStore.getState()) {}
  async getAll(): Promise<APIResponse> {
    const res = (await httpService.get("/movies")) as APIResponse;

    categoryStore.setList([...res.data]);

    return res;
  }

  async loadMore(): Promise<APIResponse> {
    let res: APIResponse;

    const { queryOptions: queryParams } = categoryStore.getState();

    res = await httpService.get("/movies", {
      params: queryParams,
    });

    categoryStore.setList(list => [...list, ...res.data.data]);

    categoryStore.setQueryOptions(options => ({
      ...options,
      cursor: res.data.cursor,
    }));

    return res;
  }

  async update(dto: Partial<CategoryEntity.Entity>, id?: string) {
    const data = {
      ...dto,
      id: id || nanoid().toString(),
      updatedAt: Timestamp.fromDate(new Date()),
      createdAt: id ? dto.createdAt : Timestamp.fromDate(new Date()),
    };

    const res = await httpService.post("/movies", data);

    // UDATE FIRESTORE

    categoryStore.setList(list => {
      if (!id) return [...list, data];
      return list.map(item => (item.id === data.id ? data : item)) as any;
    });

    return res;
  }

  async remove(id: string) {
    const res = await httpService.delete(`/movies/${id}`);

    if (res.data.error) throw res.data;

    categoryStore.setList(list => list.filter(item => item.id !== id));

    return res;
  }
  async bulkRemove(ids: any[]) {
    const res = await httpService.delete("/movies", {
      data: { ids },
    });

    if (res.data.error) throw res.data;

    categoryStore.setList(list => list.filter(item => !ids.includes(item.id)));

    return res.data;
  }

  async bulkUpdate(dto: Partial<CategoryEntity.Entity>, Ids: any[]) {
    const res = await httpService.put("/movies", { dto, Ids });

    if (res.data.error) throw res.data;

    categoryStore.setList(list => {
      return list.map(item => {
        if (Ids.includes(item.id)) {
          return {
            ...item,
            ...dto,
          };
        }
        return item;
      });
    });

    return res.data;
  }
  async search(field: string, value: any) {
    const res = await httpService.get("/movies", {
      params: {
        field,
        value,
      },
    });

    if (res.data.error) throw res.data;

    categoryStore.setList(res.data);

    return res.data;
  }
}

export const categoryService = new CategoryService();
