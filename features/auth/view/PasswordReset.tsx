import { Button, Text, VStack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import Router from "next/router";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { FormFieldHandler } from "../../../lib/atoms/Form/FormFieldHandler";
import useHookForm, { FormField } from "../../../lib/hooks/useHookForm";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import { notify } from "../../../lib/utils/helper";
import { ResetPasswordDTO } from "../data/dto/auth.dto";
import { useAuthStore } from "../logic/auth.store";
import { authService } from "../logic/services/auth.service";
import AuthLayout from "./AuthLayout/AuthLayout";

export default function PasswordReset() {
  const { t } = useTranslation();
  const { session, user } = useAuthStore();

  // * FORM SERVICE
  // -------------

  const formFields: FormField<ResetPasswordDTO>[] = [
    {
      name: "newPassword",
      type: "password",
      label: t("New Password"),
      placeholder: "Enter new password",
      validation: () =>
        yup
          .string()
          .min(8, t("Minimum of 8 digits long"))
          .required(t("Password is required")),
    },
    {
      name: "repeatPassword",
      type: "password",
      label: t("Repeat Password"),
      placeholder: "Repeat password",
      validation: () =>
        yup
          .string()
          .min(8, t("Minimum of 8 digits long"))
          .required(t("Password is required")),
    },
  ];

  const formMutation = useMutation(
    (dto: ResetPasswordDTO) => authService.resetPassword(dto),
    {
      onSuccess() {
    
        Router.push(AppRoutes.Category.baseURL);
      },
    }
  );

  const formService = useHookForm({
    formFields,
  });

  function onSubmit(dto: ResetPasswordDTO) {
    formMutation.mutate(dto);
  }

  // * HANDLERS
  // -------------

  return (
    <AuthLayout>
      <VStack
        justifyContent={"center"}
        w="full"
        gap="24px"
        textAlign={"center"}
      >
        <Text as="h3" maxW={300}>
          {t("Create new password")}
        </Text>
      </VStack>
      <FormProvider {...formService}>
        <VStack
          as={"form"}
          onSubmit={formService.handleSubmit(onSubmit)}
          w="full"
          alignItems={"start"}
        >
          {/* FORM FIELDS */}

          <VStack gap="24px" width="full" pb="42px">
            {formFields.map((field, i) => (
              <FormFieldHandler field={field} key={i} />
            ))}
          </VStack>

          {/* BUTTONS */}

          <Button
            variant={"solid"}
            colorScheme={"orange"}
            type="submit"
            width="full"
            isLoading={formMutation.isLoading}
          >
            {t("Update password")}
          </Button>
        </VStack>
      </FormProvider>
    </AuthLayout>
  );
}
