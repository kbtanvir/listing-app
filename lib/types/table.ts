export declare type Render<T> = (row: T, rowIndex?: number) => any;

export interface DataRow {
  id: any;
  title: string;
  director: string;
  year: string;
}
export type Order = "asc" | "desc";

export type FilterOptions = {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder: string;
};

export interface TableColumn<T> {
  name?: string | number | React.ReactNode;
  index: keyof T | "actions";
  sortField?: (idx: keyof T | "actions", order: Order) => any;
  render?: Render<T>;
  width?: string;
  fixed?: "left" | "right";
}
