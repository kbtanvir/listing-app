import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { FormField } from "../../../hooks/useHookForm";

export function PincodeField({ field }: { field: FormField<any> }) {
  const formService = useFormContext<FormField<any>>();
  return (
    <HStack w="full" justify={"center"}>
      <PinInput
        otp
        size="lg"
        placeholder=" "
        onChange={value => {
          formService.setValue(field.name as any, value);
        }}
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
}
