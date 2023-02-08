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
import { notify } from "../../../lib/utils/helper";
import { LoginDTO } from "../data/dto/auth.dto";
import { authService } from "../logic/services/auth.service";
import AuthLayout from "./AuthLayout/AuthLayout";

export async function getServerSideProps(context: any) {
  return {
    props: {
      redirect: {
        destination: AppRoutes.Products.baseURL,
        permanent: false,
      },
    },
  };
}

export default function Login() {
  const { t } = useTranslation();

  // * FORM SERVICE

  const formMutation = useMutation((dto: LoginDTO) => authService.login(dto), {
    onSuccess() {
      notify({
        message: t("Login successful"),
        type: "success",
      });

      Router.push(AppRoutes.Products.baseURL);
    },
    onError(error: any) {
      switch (error.data) {
        case "auth/user-not-found":
          notify({
            message: t("User not found"),
            type: "error",
          });
          break;
        case "auth/invalid-email":
          notify({
            message: t("Invalid email"),
            type: "error",
          });
          break;

        case "auth/wrong-password":
          notify({
            message: t("Wrong password"),
            type: "error",
          });
          break;

        default:
          notify({
            message: t(error.message),
            type: "error",
          });
      }
    },
  });

  const formFields: FormField<LoginDTO>[] = [
    {
      name: "email",
      placeholder: t("Enter your email"),
      type: "email",
      label: t("Email"),
      validation: () =>
        yup
          .string()
          .email(t(`Invalid email address`))
          .required(t(`Email is required`)),
    },
    {
      name: "password",
      type: "password",
      label: t("Password"),
      placeholder: "Enter your password",
      validation: () =>
        yup
          .string()
          .min(8, t("Minimum of 8 digits long"))
          .required(t("Password is required")),
    },
  ];

  const formService = useHookForm({
    formFields,
  });

  function onSubmit(dto: LoginDTO) {
    formMutation.mutate(dto);
  }

  // * HANDLERS
  // -------------

  return (
    <AuthLayout>
      <VStack justifyContent={"center"} w="full" textAlign={"center"}>
        <Text as="h3" maxW={300}>
          {t("Sign in to Baqala")}
        </Text>
      </VStack>
      <FormProvider {...formService}>
        <form onSubmit={formService.handleSubmit(onSubmit)}>
          {/* FORM FIELDS */}

          <VStack gap="24px" width="full">
            {formFields.map((field, i) => (
              <FormFieldHandler field={field} key={i} />
            ))}
          </VStack>

          {/* BUTTONS */}

          <VStack width="full">
            {/* FORGOT PASS LINKS */}
            <HStack
              pt="15px"
              pb="40px"
              justifyContent={"space-between"}
              w="full"
            ></HStack>

            <VStack w="full" gap="24px">
              <Button
                variant={"solid"}
                colorScheme={"orange"}
                type="submit"
                width="full"
                isLoading={formMutation.isLoading}
              >
                {t("Log in")}
              </Button>

              <Button
                variant={ButtonVariant.solidAlt}
                colorScheme={"orange"}
                type="button"
                onClick={() => {
                  Router.push(AppRoutes.Auth.Register);
                }}
                width="full"
              >
                {t("Create an account")}
              </Button>
              <Button
                variant={ButtonVariant.text}
                onClick={() => {
                  Router.push(AppRoutes.Auth.ForgotPassword);
                }}
              >
                {t("Forgot Password?")}
              </Button>
            </VStack>
          </VStack>
        </form>
      </FormProvider>
    </AuthLayout>
  );
}
