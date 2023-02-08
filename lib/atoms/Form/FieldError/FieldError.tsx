import { Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
export default function FieldError({ name }: { name: any }) {
  const formService = useFormContext<any>();

  return (
    <>
      {formService.formState.errors &&
        formService.formState.errors[name as string] && (
          <Text
            as="span"
            {...{
              fontSize: "14px",
              color: "red",
              display: "inline-block",
            }}
          >
            {formService.formState.errors[name]?.message as any}
          </Text>
        )}
    </>
  );
}
