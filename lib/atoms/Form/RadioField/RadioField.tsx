import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormField } from "../../../hooks/useHookForm";

export function RadioField({ field }: { field: FormField<any> }) {
  const formService = useFormContext<FormField<any>>();

  useEffect(
    () => {
      formService.setValue(field.name as any, field.options![0].label);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <Stack>
      <RadioGroup
        value={formService.watch(field.name as any)}
        onChange={value => {
          formService.setValue(field.name as any, value);
        }}
      >
        <Stack>
          {field.options?.map(option => (
            <Radio key={option.label} value={option.label}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Stack>
  );
}
