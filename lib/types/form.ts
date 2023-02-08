import { ReactNode } from "react";

export type FormFieldTypes =
  | "text"
  | "number"
  | "email"
  | "password"
  | "select"
  | "checkbox"
  | "radio"
  | "date"
  | "time"
  | "datetime"
  | "textarea"
  | "file"
  | "hidden"
  | "button"
  | "submit"
  | "reset"
  | "image"
  | "color"
  | "range"
  | "search"
  | "tel"
  | "url"
  | "month"
  | "week"
  | "datetime-local"
  | "array"
  | "html";

type dropdownOptions = string[] | {
  value: string;
  label: string;
}[];

export type FieldProps<T> = {
  name?: keyof T;
  label?: string;
  type: FormFieldTypes;
  htmlElement?: ReactNode;
  placeholder?: string;
  dropdownOptions?: dropdownOptions;
  arrayFields?: {
    name: string;
    label: string;
    type: FormFieldTypes;
    placeholder?: string;
    dropdownOptions?: dropdownOptions;
  }[];
};
