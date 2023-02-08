import { useFormContext } from "react-hook-form";
import { FormField } from "../../../hooks/useHookForm";

export function FileUploadField({ field }: { field: FormField<any> }) {
  const formService = useFormContext<FormField<any>>();

  return (
    <input
      type="file"
      onChange={e => {
        formService.setValue(field.name as any, e.target.files![0]);
      }}
    />
  );
}
