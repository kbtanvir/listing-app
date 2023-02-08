import {
  Box,
  Button,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { BiTrash } from "react-icons/bi";
import { DeleteIcon } from "../../../features/common/CustomIcons";
import { ButtonVariant } from "../../theme/components/Button";
import { TextVariant } from "../../theme/components/Text";
import { notify } from "../../utils/helper";
import { CustomModal } from "../Modal/CustomModal";

export function RemoveItemTrigger({
  submitText,
  title,
  subTitle,
  isLoading,
  deletionCallback,
}: {
  submitText?: string;
  title?: string;
  subTitle?: string;
  isLoading?: boolean;
  deletionCallback: () => Promise<any>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const removeMutation = useMutation(deletionCallback, {
    onSuccess() {
      notify({
        message: t("Item deleted"),
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
      <Box
        as="button"
        border="1px solid"
        borderColor={"gray.300"}
        borderRadius="full"
        p="10px"
        onClick={onOpen}
        cursor="pointer"
        transition="all 0.3s"
        _hover={{
          bg: "red.100",
        }}
      >
        <DeleteIcon />
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        body={
          <VStack w={"full"} alignItems="stretch">
            <VStack alignItems="center" textAlign="left" w="full" gap="40px">
              <BiTrash size={"140px"} color="red" />
              <VStack textAlign={"center"}>
                <Text variant={TextVariant.heading3} mt="-10px">
                  {title || t("Remove item")}
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
                  type="submit"
                  width="180px"
                  onClick={onClose}
                >
                  {t("No cancel")}
                </Button>
                <Button
                  variant={ButtonVariant.solid}
                  width="180px"
                  onClick={() => removeMutation.mutate()}
                  isLoading={removeMutation.isLoading}
                >
                  {submitText || t("Remove item")}
                </Button>
              </HStack>
            </VStack>
          </VStack>
        }
      />
    </>
  );
}
