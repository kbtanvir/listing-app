export enum queryParamsEnum {
  query = "query",
  page = "page",
  limit = "limit",
  sortBy = "sortBy",
  filterBy = "filterBy",
  order = "order",
  cursor = "cursor",
  collection = "collection",
}

export type IqueryOptions = {
  [queryParamsEnum.query]: string ;
  [queryParamsEnum.page]: number;
  [queryParamsEnum.limit]: number;
  [queryParamsEnum.sortBy]: string;
  [queryParamsEnum.filterBy]: string;
  [queryParamsEnum.order]: "asc" | "desc";
  [queryParamsEnum.cursor]: any;
  [queryParamsEnum.collection]: string;
};

export const defaultQueryOptions: IqueryOptions = {
  [queryParamsEnum.query]: "",
  [queryParamsEnum.page]: 1,
  [queryParamsEnum.limit]: 10,
  [queryParamsEnum.sortBy]: "createdAt",
  [queryParamsEnum.filterBy]: "",
  [queryParamsEnum.order]: "desc",
  [queryParamsEnum.cursor]: null,
  [queryParamsEnum.collection]: "",
};

export type APIResponse = {
  data: any | any[];
  error: boolean;
  message: string;
};
