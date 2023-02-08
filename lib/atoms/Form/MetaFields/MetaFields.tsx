import { Button, Grid, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormField } from "../../../hooks/useHookForm";
import { ButtonVariant } from "../../../theme/components/Button";
import { MetaFieldError } from "../FieldError/MetaFieldError";
// import FieldError from "../FieldError/FieldError";
import { styles } from "./styles";

export function MetaFields({ field }: { field: FormField<any> }) {
  const { t } = useTranslation();

  const formService = useFormContext<any>();
  const fieldArrayService = useFieldArray({
    control: formService.control,
    name: field.name as string,
  });

  return (
    <>
      <Grid
        {...styles.grid}
        gridTemplateColumns={{
          lg: `repeat(${3}, 1fr)`,
        }}
      >
        {fieldArrayService.fields.map((_, i) => {
          return (
            <React.Fragment key={_.id}>
              <VStack
                alignItems={"stretch"}
                justifyContent="space-between"
                gap="3"
              >
                <Input
                  boxShadow={"2px 2px 10px #eee"}
                  {...formService.register(`members.${i}.email`)}
                  placeholder={t("Email")}
                />
                <MetaFieldError
                  parentFieldName={field.name as any}
                  metaFieldName={"email"}
                  fieldIndex={i}
                />
              </VStack>
              <VStack
                alignItems={"stretch"}
                key={i}
                justifyContent="space-between"
              >
                <Input
                  boxShadow={"2px 2px 10px #eee"}
                  {...formService.register(`members.${i}.role`)}
                  placeholder={t("Role")}
                />
                <MetaFieldError
                  parentFieldName={field.name as any}
                  metaFieldName={"role"}
                  fieldIndex={i}
                />
              </VStack>
              <VStack alignItems={"stretch"}>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    fieldArrayService.remove(i);
                  }}
                >
                  {t("Remove")}
                </Button>
              </VStack>
            </React.Fragment>
          );
        })}
      </Grid>
      <VStack alignItems={"center"}>
        <Button
          mt="20px"
          variant={ButtonVariant.outline}
          onClick={() => {
            fieldArrayService.append({
              key: "",
              value: "",
            });
          }}
        >
          {t("Add more")}
        </Button>
      </VStack>
    </>
  );
}
