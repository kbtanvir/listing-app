import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SuccessModalIcon } from "../../../features/common/CustomIcons";
import { ButtonVariant } from "../../theme/components/Button";
import { TextVariant } from "../../theme/components/Text";

export function SuccessPopup({
  keyword,
  submitText,
  onSubmit,
  title,
  subTitle,
  isLoading,
}: {
  keyword?: string;
  submitText?: string;
  onSubmit: () => void;
  title?: string;
  subTitle?: string;
  isLoading?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <>
      <VStack w={"full"} alignItems="stretch">
        <VStack alignItems="center" textAlign="left" w="full" gap="40px">
          <SuccessModalIcon />
          <VStack textAlign={"center"}>
            <Text variant={TextVariant.heading3} mt="-10px">
              {`${keyword} ${t("created successfully")}`}
            </Text>
            <Text variant={TextVariant.bodyMD}>
              {`${t("Hurrah!")} ${keyword} ${t(
                " created successfully. you can change anything from project page later"
              )}`}
            </Text>
          </VStack>
          <HStack gap="16px" w="full" justifyContent={"center"}>
            <Button
              variant={ButtonVariant.solid}
              width="180px"
              onClick={onSubmit}
              isLoading={isLoading}
            >
              {submitText || t("Back to home")}
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
