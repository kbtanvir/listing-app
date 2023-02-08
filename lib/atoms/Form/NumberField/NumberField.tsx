import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormField } from "../../../hooks/useHookForm";

export function NumberField({ field }: { field: FormField<any> }) {
  const { t } = useTranslation();
  const formService = useFormContext<FormField<any>>();

  return (
    <NumberInput
      min={0}
      name={field.name as string}
      placeholder={t(field.placeholder ?? "")}
      onChange={valueString => {
        formService.setValue(field.name as any, valueString);
      }}
      value={formService.watch(field.name as any)}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
