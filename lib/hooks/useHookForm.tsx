import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn, ValidationMode } from "react-hook-form";
import * as yup from "yup";

export type FormFieldTypes =
  | "text"
  | "number"
  | "email"
  | "password"
  | "select-dropdown"
  | "multi-select-dropdown"
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
  | "file-upload"
  | "image-upload"
  | "meta-fields"
  | "invite-fields"
  | "pincode"
  | "toggle-switch"
  | "html";

export type DropdownOptions = {
  label: string;
  value: string;
}[];

export interface FormField<DTO> {
  name: keyof DTO;
  label?: string;
  max?: number;
  min?: number;
  placeholder?: string;
  defaultValue?: any;
  showWordCount?: boolean;
  type: FormFieldTypes;
  html?: string;
  validation: () => yup.SchemaOf<any>;
  options?: DropdownOptions;
  width?: "full" | "half" | "third";
  className?: string;
  disabled?: boolean;
  metaFields?: {
    name: string;
    label: string;
    type: FormFieldTypes;
    placeholder?: string;
    options?: DropdownOptions;
    defaultValue?: any;
  }[];
  metaLabels?: {
    key: string;
    value: string;
  };
}

export default function useHookForm({
  ...props
}: {
  formFields: FormField<any>[];
  mode?: keyof ValidationMode | undefined;
}): UseFormReturn<any> {
  return useForm({
    mode: props.mode ?? "onSubmit",
    resolver: yupResolver(
      yup.object(
        props.formFields.reduce(
          (acc, cur) => ({ ...acc, [cur.name]: cur.validation() }),
          {}
        )
      )
    ),
  });
}
