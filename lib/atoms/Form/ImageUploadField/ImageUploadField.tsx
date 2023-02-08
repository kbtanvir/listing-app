import { Img, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TextVariant } from "../../../theme/components/Text";
import FileInputField from "../../FileUpload/FileUpload";

export function ImageUploadField({ field }: { field: any }) {
  const { t } = useTranslation();
  const [imageUrl, setimageUrl] = useState("");
  const formService = useFormContext<any>();

  function OnFileChange(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result !== "string") return;

      if (!["image/jpeg", "image/png"].includes(file.type)) {
        formService.setError("thumbnail", {
          type: "manual",
          message: t("File type must be 'jpeg' or 'png'"),
        });
        return;
      }

      if (file.size > 1000000) {
        formService.setError("thumbnail", {
          type: "manual",
          message: t("File size must be less than 1MB"),
        });

        return;
      }

      setimageUrl(reader.result);

      formService.setValue(field.name, {
        url: reader.result,
        size: file.size,
        type: file.type,
        file,
      });
    };

    reader.onabort = () => {
      return formService.setError(field.name, {
        type: "manual",
        message: t("File reading was aborted"),
      });
    };

    reader.onerror = () => {
      return formService.setError(field.name, {
        type: "manual",
        message: t("File reading has failed"),
      });
    };

    if (reader && file) reader.readAsDataURL(file ?? "");
  }

  useEffect(() => {
    if (!field.name) return;
    const url = formService.watch(field.name);
    if (!url) return;
    setimageUrl(formService.watch(field.name).url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formService.watch(field.name), field.name]);

  return (
    <VStack
      maxW={"450px"}
      w="full"
      alignItems={"start"}
      justifyContent="center"
      gap="10"
    >
      {imageUrl && (
        <Img
          border={"1px solid #E2E8F0"}
          borderRadius={"10px"}
          src={imageUrl}
          w={["full", "350px"]}
          height={["350", "450"]}
          objectFit="cover"
        />
      )}

      <Text variant={TextVariant.bodyMD}>
        {imageUrl === "" ? t("Add image") : t("Update image")}
      </Text>
      <FileInputField onChange={OnFileChange} />
    </VStack>
  );
}
