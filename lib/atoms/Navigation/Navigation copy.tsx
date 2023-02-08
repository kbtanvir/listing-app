import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Router from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

import { EngIconSvg, NorIconSvg } from "../../../features/common/CustomIcons";
import { notify, pathname } from "../../utils/helper";
import { Card } from "../Card/Card";
import { styles } from "./styles";

export function Navigation({
  navList,
}: {
  navList: {
    text: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
}) {
  const { t } = useTranslation();
  const [showLanguage, setShowLanguage] = useState<boolean>(false);

  return (
    <Card styles={styles.card}>
      <VStack {...styles.wrapper}>
        {navList.map((item, i) => (
          <HStack
            key={i}
            {...styles.listItem}
            onClick={item.onClick}
            color={
              item.text === pathname(Router.pathname) ? "gray.800" : "gray.500"
            }
            fontWeight={item.text === pathname(Router.pathname) ? 800 : 600}
            borderColor={
              item.text === pathname(Router.pathname)
                ? "brand.600"
                : "transparent"
            }
            backgroundColor={
              item.text === pathname(Router.pathname)
                ? "gray.100"
                : "transparent"
            }
          >
            <Box position={"relative"} bottom="1px" {...styles.icon}>
              {item.icon}
            </Box>
            <Text {...styles.menuText}>{t(item.text)}</Text>
          </HStack>
        ))}
        <HStack
          {...styles.listItem}
          position={"relative"}
          onClick={() => setShowLanguage(!showLanguage)}
        >
          <Box position={"absolute"} right="24px" {...styles.icon}>
            {showLanguage ? (
              <IoIosArrowDown fontSize={24} />
            ) : (
              <IoIosArrowForward fontSize={24} color={"gray.300"} />
            )}
          </Box>
          <Box position={"relative"} bottom="1px" {...styles.icon}>
            <MdLanguage fontSize={20} />
          </Box>
          <Text {...styles.menuText}>Select Language</Text>
        </HStack>
        {showLanguage && <TranslationButtons />}
      </VStack>
    </Card>
  );
}

function TranslationButtons() {
  const { t, i18n } = useTranslation();

  return (
    <VStack alignItems={"flex-start"} w="full" pl="52px">
      {["en", "nor"].map(lang => (
        <Button
          key={lang}
          variant="unstyled"
          cursor="pointer"
          onClick={() => {
            i18n.changeLanguage(lang);
            notify({
              message: t("Language updated successfully"),
              type: "success",
            });
          }}
          size="sm"
          fontWeight={i18n.language === lang ? "600" : "normal"}
        >
          {lang === "en" ? (
            <Box display={"flex"} alignItems={"center"}>
              <EngIconSvg />
              <Text
                paddingLeft="8px"
                fontWeight={i18n.language === lang ? "600" : "normal"}
                color={i18n.language === lang ? "gray.800" : "gray.500"}
                fontSize={"14px"}
              >
                English
              </Text>
            </Box>
          ) : (
            <Box display={"flex"} alignItems={"center"}>
              <NorIconSvg />
              <Text
                paddingLeft="8px"
                fontWeight={i18n.language === lang ? "600" : "normal"}
                color={i18n.language === lang ? "gray.800" : "gray.500"}
                fontSize={"14px"}
              >
                Norwegian
              </Text>
            </Box>
          )}
        </Button>
      ))}
    </VStack>
  );
}
