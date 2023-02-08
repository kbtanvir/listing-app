import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import Router from "next/router";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { FormFieldHandler } from "../../../lib/atoms/Form/FormFieldHandler";
import useHookForm, { FormField } from "../../../lib/hooks/useHookForm";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import { ButtonVariant } from "../../../lib/theme/components/Button";
import { colors } from "../../../lib/theme/consts/colors.const";
import { notify } from "../../../lib/utils/helper";
import { OPTVerificationDTO } from "../data/dto/auth.dto";
import { authService } from "../logic/services/auth.service";
import AuthLayout from "./AuthLayout/AuthLayout";

export default function OPTVerification() {
  const { t } = useTranslation();

  // * FORM SERVICE

  const formMutation = useMutation(
    (dto: OPTVerificationDTO) =>
      authService.verifyOPT({
        ...dto,
        email: Router.query.email as string,
      }),
    {
      onSuccess() {
        notify({
          message: t("Logged in"),
          type: "success",
        });
        Router.push(AppRoutes.ResetPassword);
      },
    }
  );

  const formFields: FormField<OPTVerificationDTO>[] = [
    {
      name: "code",
      placeholder: t("Enter your email"),
      type: "pincode",
      validation: () => yup.string().required(t(`OTP Code is required`)),
    },
  ];

  const formService = useHookForm({
    formFields,
  });

  function onSubmit(dto: OPTVerificationDTO) {
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
          {t("Enter your security code")}
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
          <Text as="span" pb="26px">
            {t(`We send your code to`)}{" "}
            <Text as="span" fontWeight={"bold"}>
              {Router.query.email ?? ""}
            </Text>
          </Text>

          <HStack pt="15px" pb="40px" justifyContent={"space-between"} w="full">
            <Text as="span">{t("Didn't get any code?")}</Text>
            <Button
              variant={ButtonVariant.text}
              onClick={() => {
                authService
                  .requestChangePass({
                    email: Router.query.email as string,
                  })
                  .then(() => {
                    notify({
                      message: t("Code sent"),
                      type: "success",
                    });
                  });
              }}
              color={`${colors.brand} !important`}
            >
              {t("Resend")}
            </Button>
          </HStack>

          {/* BUTTONS */}

          <Button
            variant={"solid"}
            colorScheme={"orange"}
            type="submit"
            width="full"
            isLoading={formMutation.isLoading}
          >
            {t("Confirm")}
          </Button>
        </VStack>
      </FormProvider>
    </AuthLayout>
  );
}
