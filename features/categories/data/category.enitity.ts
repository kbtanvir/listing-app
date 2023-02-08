import { Timestamp } from "firebase/firestore";
import { IqueryOptions } from "../../../lib/types/network";

export namespace CategoryEntity {
  export interface Entity {
    id: any;
    name: string;
    description: string;
    productsCount: number;
    thumbnail: { url: string; file?: File };
    updatedAt: Timestamp;
    createdAt: Timestamp;
  }

  export type ProjectBreifDTO = Pick<Entity, "description">;

  export type Store = {
    list: Entity[];
    queryOptions: Partial<IqueryOptions>;
    selectedIds: any[];
  };
}
