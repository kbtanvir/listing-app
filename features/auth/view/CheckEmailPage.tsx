import { Button, Text, VStack } from "@chakra-ui/react";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "../../../lib/routes/AppRoutes";
import AuthLayout from "./AuthLayout/AuthLayout";

export default function CheckEmailPage() {
  const { t } = useTranslation();

  // * FORM SERVICE

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
          {t("We have sent you an email with a link to reset your password.")}
        </Text>
      </VStack>
      <VStack w="full" alignItems={"start"}>
        <Button
          variant={"solid"}
          colorScheme={"orange"}
          type="submit"
          width="full"
          onClick={() => Router.push(AppRoutes.Auth.Login)}
        >
          {t("Login")}
        </Button>
      </VStack>
    </AuthLayout>
  );
}
