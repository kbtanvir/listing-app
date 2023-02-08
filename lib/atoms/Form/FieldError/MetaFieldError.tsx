import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function MetaFieldError({
  metaFieldName,
  parentFieldName,
  fieldIndex,
}: {
  metaFieldName: string;
  parentFieldName: string;
  fieldIndex: number;
}) {
  const formService = useFormContext<any>();
  const [errorText, setError] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    if (!formService.formState.errors?.[parentFieldName]) return setError("");
    const errorParent = formService.formState.errors?.[parentFieldName] as any;
    const error = errorParent[fieldIndex]?.[metaFieldName];
    if (error) {
      setError(t(error.message));
    } else {
      setError("");
    }
    // TODO: do something about it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formService.formState.errors,
    parentFieldName,
    fieldIndex,
    metaFieldName,
  ]);

  return (
    <Text
      as="span"
      {...{
        fontSize: "14px",
        color: "red",
        display: "inline-block",
      }}
    >
      {errorText}
    </Text>
  );
}
