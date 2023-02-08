import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormField } from "../../../hooks/useHookForm";
import { ButtonVariant } from "../../../theme/components/Button";
import { TextVariant } from "../../../theme/components/Text";
import { MetaFieldError } from "../FieldError/MetaFieldError";
import { RoleSelectionField } from "./RoleSelection";
import { styles } from "./styles";

export function InviteMemberFields({ field }: { field: FormField<any> }) {
  const { t } = useTranslation();

  const formService = useFormContext<any>();
  const fieldArrayService = useFieldArray({
    control: formService.control,
    name: field.name as string,
  });

  return (
    <>
      <VStack gap="16px" w="full" alignItems={"start"}>
        <Text variant={TextVariant.heading3}>{t(field.label as any)}</Text>

        {fieldArrayService.fields.map((_, i) => {
          return (
            <VStack key={i} w="full" alignItems={"start"}>
              <HStack {...styles.row} key={_.id}>
                <VStack
                  alignItems={"stretch"}
                  justifyContent="space-between"
                  gap="3"
                  {...styles.col1}
                >
                  <Input
                    border={"none"}
                    {...formService.register(`members.${i}.email`)}
                    placeholder={t("Email")}
                  />
                </VStack>
                <VStack
                  alignItems={"stretch"}
                  key={i}
                  justifyContent="space-between"
                  {...styles.col2}
                >
                  <RoleSelectionField
                    formKey={`members.${i}.role` as any}
                    options={field.metaFields![1].options as any}
                    defaultValue={field.metaFields![1].defaultValue as any}
                  />
                </VStack>
                <VStack alignItems={"stretch"} {...styles.col3}>
                  <Box
                    {...styles.removeButton}
                    onClick={() => {
                      fieldArrayService.remove(i);
                    }}
                  >
                    <SmallCloseIcon />
                  </Box>
                </VStack>
              </HStack>

              <MetaFieldError
                parentFieldName={field.name as any}
                metaFieldName={"email"}
                fieldIndex={i}
              />
            </VStack>
          );
        })}
        <VStack alignItems={"start"} w="full">
          <Button
            variant={ButtonVariant.outline}
            onClick={() => fieldArrayService.append({})}
          >
            {t("Add more")}
          </Button>
        </VStack>
      </VStack>
    </>
  );
}
