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
import { ForgotPasswordDTO } from "../data/dto/auth.dto";
import { authService } from "../logic/services/auth.service";
import AuthLayout from "./AuthLayout/AuthLayout";

export default function ForgotPassword() {
  const { t } = useTranslation();

  // * FORM SERVICE

   const formMutation = useMutation(
    (dto: ForgotPasswordDTO) => authService.requestChangePass(dto),
    {
      onSuccess() {
        notify({
          message: t("Password reset email sent"),
          type: "success",
        });
        Router.push(
          `${AppRoutes.Auth.OPTVerification}?email=${
            formService.getValues().email
          }`
        );
      },
      onError(error: any) {
        switch (error.data) {
          case "auth/user-not-found":
            notify({
              message: t("User not found"),
              type: "error",
            });
        }
      },
    }
  );

  const formFields: FormField<ForgotPasswordDTO>[] = [
    {
      name: "email",
      placeholder: t("Enter your email"),
      type: "email",
      label: t("Use your account email to proceed"),
      validation: () =>
        yup
          .string()
          .email(t(`Invalid email address`))
          .required(t(`Email is required`)),
    },
  ];

  const formService = useHookForm({
    formFields,
  });

  function onSubmit(dto: ForgotPasswordDTO) {
    formMutation.mutate(dto);
    // Router.push(AppRoutes.Auth.VerificationMethod);
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
          {t("Forgot Password")}
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
            {t("Continue")}
          </Button>
        </VStack>
      </FormProvider>
    </AuthLayout>
  );
}
