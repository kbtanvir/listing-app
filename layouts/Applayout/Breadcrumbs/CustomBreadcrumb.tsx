import { Box, Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import Router from "next/router";
import { useTranslation } from "react-i18next";
import { RightArrowIcon } from "../../../features/common/CustomIcons";

export function CustomBreadcrumb() {
  const { t } = useTranslation();
  return (
    <Breadcrumb
      color={"white"}
      separator={
        <Box px="12px">
          <RightArrowIcon />
        </Box>
      }
    >
      {/* <BreadcrumbItem cursor="pointer">
        <Link href={AppRoutes.Root}>
          <Text color="gray.900" fontSize={"16px"}>
            {t("HOME")}
          </Text>
        </Link>
      </BreadcrumbItem> */}
      {Router.pathname.split("/").map((item, i) => {
        if (item) {
          return (
            <BreadcrumbItem key={i} cursor="pointer">
              <Link href={`/${item}`}>
                <Text fontSize={"16px"} color={"gray.900"}>{`${t(
                  item
                ).toUpperCase()}`}</Text>
              </Link>
            </BreadcrumbItem>
          );
        }
      })}
    </Breadcrumb>
  );
}
