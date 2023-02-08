import { Box, Button, Container, VStack } from "@chakra-ui/react";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { MdArrowLeft } from "react-icons/md";
import { AppRoutes } from "../../../../lib/routes/AppRoutes";
import { ButtonVariant } from "../../../../lib/theme/components/Button";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      minH="100vh !important"
      w="full"
      bg={"gray.100"}
      py="80px"
      px={{
        base: "20px",
        md: "40px",
      }}
    >
      <Box
        display={{
          base: "none",
          sm: "block",
        }}
        pb="80px"
      >
        {/* <Heading>Baqala Admin Panel</Heading> */}
        {/* <Image
          src={`/logo.svg`}
          alt="auth splash"
          width={333}
          height={30}
          objectFit="contain"
          objectPosition="center"
        /> */}
      </Box>
      <Container
        background={"white"}
        p={{
          base: "20px",
          sm: "40px",
        }}
        mb="50px !important"
        size="sm"
        maxW="500px"
        className="auth-layout"
        borderRadius={16}
        boxShadow="0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)"
      >
        {children}
      </Container>
      {Router.pathname !== AppRoutes.Auth.Login && (
        <Button
          variant={ButtonVariant.solidWhite}
          colorScheme={"orange"}
          type="submit"
          width="197px"
          onClick={() => {
            Router.back();
          }}
          leftIcon={<MdArrowLeft size={25} />}
          iconSpacing={2}
        >
          {t("Back to Home")}
        </Button>
      )}
    </VStack>
  );
}
