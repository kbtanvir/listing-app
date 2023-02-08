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
import { PasswordResetMethodDTO } from "../data/dto/auth.dto";
import { authService } from "../logic/services/auth.service";
import AuthLayout from "./AuthLayout/AuthLayout";

export default function VerificiationMethod() {
  const { t } = useTranslation();

  // * FORM SERVICE

  const formMutation = useMutation(
    (dto: PasswordResetMethodDTO) => authService.passwordResetMethod(dto),
    {
      onSuccess() {
        notify({
          message: t("Logged in"),
          type: "success",
        });
        Router.push(AppRoutes.Products.baseURL);
      },
    }
  );

  const formFields: FormField<PasswordResetMethodDTO>[] = [
    {
      name: "passwordResetMethod",
      type: "radio",
      options: [
        {
          value: t("Email"),
          label: `nam........@companyemail.com`,
        },
        {
          value: t("Phone"),
          label: `+123454679.............99`,
        },
      ],
      defaultValue: 0,
      validation: () =>
        yup.string().required(t(`Password reset method is required`)),
    },
  ];

  const formService = useHookForm({
    formFields,
  });

  function onSubmit(dto: PasswordResetMethodDTO) {
    // console.log(dto);
    // formMutation.mutate(dto);
    Router.push(AppRoutes.Auth.OPTVerification);
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
          {t("Password reset method")}
        </Text>
      </VStack>
      <FormProvider {...formService}>
        <VStack
          as={"form"}
          onSubmit={formService.handleSubmit(onSubmit)}
          w="full"
          alignItems={"start"}
        >
          <Text as="span" pb="26px">
            {t("Choose a method to reset your password")}
          </Text>
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
            {t("Send Request")}
          </Button>
        </VStack>
      </FormProvider>
    </AuthLayout>
  );
}
