import { Button, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiTrash } from "react-icons/bi";
import { DeleteIcon } from "../../../features/common/CustomIcons";
import { ButtonVariant } from "../../theme/components/Button";
import { TextVariant } from "../../theme/components/Text";
import { notify } from "../../utils/helper";
import { CustomModal } from "../Modal/CustomModal";
export function RemoveSelectedTrigger({
  submitText,
  title,
  subTitle,

  deletionCallback,
}: {
  submitText?: string;
  title?: string;
  subTitle?: string;
  isLoading?: boolean;
  deletionCallback: () => Promise<any>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();

  const removeMutation = useMutation(deletionCallback, {
    onSuccess() {
      notify({
        message: t("Items deleted"),
        type: "success",
      });

      onClose();
    },
    onError({ message }) {
      notify({
        message: t(message),
        type: "error",
      });
    },
  });
  return (
    <>
      {
        <Button
          h="40px"
          border={"1px solid"}
          borderColor={"red.500"}
          color={"red.500"}
          size={["sm", "lg"]}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          variant={ButtonVariant.outline}
          _hover={
            {
              color: "white",
              bg: "red.500",
            } as any
          }
          px="10px"
          onClick={onOpen}
          rightIcon={<DeleteIcon color={hover ? "white" : "red"} />}
        >
          {t("Remove selected")}
        </Button>
      }
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        body={
          <VStack w={"full"} alignItems="stretch">
            <VStack alignItems="center" textAlign="left" w="full" gap="40px">
              <BiTrash size={"140px"} color="red" />

              <VStack textAlign={"center"}>
                <Text variant={TextVariant.heading3} mt="-10px">
                  {t("Remove selected items")}
                </Text>
                <Text variant={TextVariant.bodyMD}>
                  {subTitle ||
                    t(
                      "Are you sure you want to remove the item? This action cannot be undone."
                    )}
                </Text>
              </VStack>
              <HStack gap="16px" w="full" justifyContent={"center"}>
                <Button
                  variant={ButtonVariant.solidGray}
                  colorScheme={"orange"}
                  type="button"
                  width="180px"
                  onClick={onClose}
                >
                  {t("Cancel")}
                </Button>
                <Button
                  variant={ButtonVariant.solid}
                  width="180px"
                  onClick={() => {
                    removeMutation.mutate();
                  }}
                  isLoading={removeMutation.isLoading}
                >
                  {submitText || t("Confirm")}
                </Button>
              </HStack>
            </VStack>
          </VStack>
        }
      />
    </>
  );
}
